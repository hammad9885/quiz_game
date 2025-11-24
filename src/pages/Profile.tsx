import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../styles/pages/profile.scss";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const loadScores = async () => {
      const ref = collection(db, "scores", user.uid, "records");
      const q = query(ref, orderBy("timestamp", "desc"), limit(50));
      const snap = await getDocs(q);
      setRecords(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      setLoading(false);
    };

    loadScores();
  }, [user]);

  if (!user) return <p>Please log in</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1>Your Profile</h1>
        <p className="email">{user.email}</p>

        <h2>Quiz History</h2>

        {loading ? (
          <p>Loading...</p>
        ) : records.length === 0 ? (
          <p>No quiz history yet.</p>
        ) : (
          <ul className="records">
            {records.map((r) => (
              <li key={r.id} className="record-item">
                <span className="score">
                  Score: {r.score} / {r.total}
                </span>
                <span className="time">
                  {new Date(r.timestamp).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="buttons">
          <Link to="/" className="btn">Home</Link>
          <Link to="/quiz" className="btn">Start Quiz</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
