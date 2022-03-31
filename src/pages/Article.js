import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

export default function Article() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    firestore
      .collection("blog-posts")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setData(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that post");
        }
      });
  }, [id]);

  return (
    <div className="blog post">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data &&( <div className="container">
        <h1 className="title">{data.title}</h1>
        <p className="text-content">{data.content}</p>
      </div>
      )}
    </div>
  );
}
