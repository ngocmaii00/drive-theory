"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CornerUpLeft } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const QuizPage = () => {
  const params = useParams();
  const id = params.id;
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(19 * 60);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:9999/questions");
        const data = await response.json();
        setQuestions(data.filter((q: any) => q.exam_id == id));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [id]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (questionId: number, selectedId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedId }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q: any) => {
      const selected = answers[q.id];
      const correctAnswer = q.answer.find((a: any) => a.correct);
      if (selected && selected === correctAnswer.id.toString()) {
        correct++;
      }
    });
    if (!window.confirm("Bạn chắc chắn muốn nộp bài?")) return;
    setScore(correct);
    toast.success(`Bạn đã nộp bài thành công`);
  };

  return (
    <div className="relative z-10 text-sm text-slate-400 px-14">
      <div className="flex items-center justify-between py-6">
        <CardTitle className="text-white text-xl font-bold uppercase">
          Đề thi số {id}
        </CardTitle>
        <div className="flex items-center bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 px-4 py-2 rounded-full shadow-lg">
          <Clock className="w-4 h-4 mr-2" />
          <span>
            Thời gian làm bài:{" "}
            <span className="font-bold text-white">{formatTime(timeLeft)}</span>
          </span>
        </div>
        <Button
          className="text-white group cursor-pointer border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Link
            href="/trial"
            className="group-hover:scale-90 flex items-center"
          >
            <CornerUpLeft className="w-4 h-4 mr-2" />
            Chọn đề khác
          </Link>
        </Button>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-8 flex flex-col justify-center items-center"
      >
        {questions.map((q: any, index: number) => (
          <Card className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 overflow-hidden w-[45%] py-6 px-8">
            <div key={q.id}>
              <p className="text-white font-semibold mb-2">
                Câu {index + 1}: {q.question}
              </p>
              {q.answer.map((a: any) => (
                <label key={a.id} className="block mb-1 text-slate-300">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={a.id}
                    checked={answers[q.id] === a.id.toString()}
                    onChange={() => handleChange(q.id, a.id.toString())}
                    className="mr-2"
                  />
                  {a.content}
                </label>
              ))}
            </div>
          </Card>
        ))}
        <Button
          type="button"
          onClick={handleSubmit}
          className="text-white group cursor-pointer border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <span className="group-hover:scale-90">Nộp bài</span>
        </Button>

        {score !== null && (
          <div className="mt-4 text-white font-bold">
            Số câu trả lời chính xác: {score}/{questions.length}
          </div>
        )}
      </form>
    </div>
  );
};

export default QuizPage;
