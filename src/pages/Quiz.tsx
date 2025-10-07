import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import "../styles/pages/quiz.scss";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  const q = questions[current];

  return (
    <div className="quiz">
      <h2>
        Quiz
      </h2>
      <p className="question">{q.question}</p>
      <ul className="options">
        {q.options.map((option, i) => (
          <li
            key={i}
            onClick={() => setSelected(option)}
            className={selected === option ? "selected" : ""}
          >
            {option}
          </li>
        ))}
      </ul>

      <button onClick={handleNext} disabled={!selected}>
        {current + 1 === questions.length ? "Finish" : "Next"}
      </button>
      <p className="score">Question {current + 1} / {questions.length}</p>
    </div>
  );
};

export default Quiz;
