import { firestore } from "../src/firebase/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

function Articles() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    firestore
      .collection("blog-posts")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("no blog posts");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      <div className="container">
        {data &&
          data.map((post) => (
            <div key={post.id} className="article">
              <Link className="article-links"to={`/posts/${post.id}`}>
                <h3 className="article-title">{post.title}</h3>
                <p className="article-subtitle">{post.content}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Articles;
