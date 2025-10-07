import { Link } from "react-router-dom";
import "../styles/pages/home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Quiz Game</h1>
      <Link to="/quiz" className="start-btn">Start Quiz</Link>
    </div>
  );
};

export default Home;
