import { Link, useLocation } from "react-router-dom";
import "../styles/pages/result.scss";

const Result = () => {
  const location = useLocation();
  const { score = 0, total = 0 } = (location.state as { score: number; total: number }) || {};

  return (
    <div className="result">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {total}</p>
      <Link to="/" className="home-btn">Go Home</Link>
    </div>
  );
};

export default Result;
