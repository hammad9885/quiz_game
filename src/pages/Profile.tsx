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
    const fetchScores = async () => {
      if (!user) return;
      const ref = collection(db, "scores", user.uid, "records");
      const q = query(ref, orderBy("timestamp", "desc"), limit(50));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRecords(data);
      setLoading(false);
    };

    fetchScores();
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
            {records.map((record) => (
              <li key={record.id} className="record-item">
                <span className="score">
                  Score: {record.score} / {record.total}
                </span>
                <span className="time">
                  {new Date(record.timestamp).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="buttons">
          <Link to="/" className="btn">
            Home
          </Link>
          <Link to="/quiz" className="btn">
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
