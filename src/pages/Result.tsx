import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/pages/result.scss";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);

  const { score = 0, total = 0 } =
    (location.state as { score: number; total: number }) || {
      score: 0,
      total: 0,
    };

  const savedRef = useRef(false);

  useEffect(() => {
    const saveScore = async () => {
      if (!user || savedRef.current) return;

      savedRef.current = true;

      const ref = collection(db, "scores", user.uid, "records");

      await addDoc(ref, {
        score,
        total,
        timestamp: Date.now(),
      });
    };

    saveScore();
  }, [user, score, total]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="center">
      <div className="result">
        <h1>Quiz Completed!</h1>
        <p>
          Your Score: {score} / {total}
        </p>

        <div className="buttons">
          <Link to="/" className="home-btn">
            Go Home
          </Link>

          <Link to="/profile" className="home-btn">
            View Profile
          </Link>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
