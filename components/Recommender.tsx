"use client";

import { useState } from "react";
import { Sparkles, Send } from "lucide-react";
import { generateRecommendationMessage, openWhatsApp } from "@/lib/whatsapp";

interface Question {
  id: string;
  title: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: "gender",
    title: "Que tipo de fragancia buscas?",
    options: ["Masculino", "Femenino", "Unisex"],
  },
  {
    id: "profile",
    title: "Cual es tu perfil aromatico favorito?",
    options: ["Dulce", "Fresco", "Intenso", "Amaderado"],
  },
  {
    id: "occasion",
    title: "Para que momento lo necesitas?",
    options: ["Dia", "Noche", "Trabajo", "Salida"],
  },
  {
    id: "intensity",
    title: "Que intensidad prefieres?",
    options: ["Suave", "Equilibrado", "Potente"],
  },
];

export default function Recommender() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [name, setName] = useState("");

  const progress = (answers.length / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const handleSend = () => {
    if (!name.trim()) return;

    const formattedAnswers = questions.map((q, i) => ({
      question: q.title,
      answer: answers[i],
    }));

    openWhatsApp(generateRecommendationMessage(name.trim(), formattedAnswers));
    handleReset();
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setFinished(false);
    setName("");
  };

  if (finished) {
    return (
      <section
        id="recomendador"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-red-950/10 to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-red-500 font-bold text-sm uppercase tracking-widest">
                Recomendacion personalizada
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Un paso mas
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Dejanos tu nombre para contactarte por WhatsApp con la
              recomendacion ideal segun tus preferencias.
            </p>

            <div className="max-w-md mx-auto space-y-4">
              <div className="space-y-3">
                <div className="bg-gray-900/50 border border-red-900/30 rounded-xl p-4 text-left space-y-2">
                  {questions.map((q, i) => (
                    <div key={q.id} className="flex justify-between text-sm">
                      <span className="text-gray-500">{q.title}</span>
                      <span className="text-red-400 font-semibold">
                        {answers[i]}
                      </span>
                    </div>
                  ))}
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Tu nombre"
                  className="w-full px-5 py-4 bg-gray-900/50 border border-red-900/30 focus:border-red-500/50 rounded-xl text-white placeholder-gray-500 outline-none transition-colors duration-300 text-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSend}
                  disabled={!name.trim()}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                >
                  <Send size={18} />
                  Enviar por WhatsApp
                </button>
                <button
                  onClick={handleReset}
                  className="border-2 border-red-500/40 hover:border-red-500 text-red-400 hover:text-red-300 font-bold py-4 px-6 rounded-lg transition-all duration-300"
                >
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="recomendador"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-red-950/10 to-black"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-sm uppercase tracking-widest">
            <Sparkles size={18} />
            Recomendador inteligente
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Encontra tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              perfume ideal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Responde unas simples preguntas y te recomendaremos la fragancia
            perfecta para ti.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <p className="text-gray-400">
              Pregunta {answers.length + 1} de {questions.length}
            </p>
            <p className="text-red-400 font-bold">{Math.round(progress)}%</p>
          </div>
          <div className="h-2 bg-gray-900/50 rounded-full overflow-hidden border border-red-900/30">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              {questions[currentQuestion].title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black border border-red-900/30 hover:border-red-500/50 rounded-xl transition-all duration-300 hover:shadow-xl text-white font-bold text-lg"
              >
                {option}
                <div className="absolute inset-0 rounded-xl bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-red-900/30 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Nuestro equipo experto utilizara tus respuestas para recomendarte la
            fragancia mas adecuada a tu estilo y preferencias personales.
          </p>
        </div>
      </div>
    </section>
  );
}
