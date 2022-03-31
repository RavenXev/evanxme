import Articles from "../Articles";

export default function Home() {
  return (
    <>
      <div className="hero container">
        <h1 className="title">Hello there! I'm Evan Xu.</h1>
        <h2 className="subtitle">
          Sequencing the best mental models for the good life.
        </h2>
      </div>
      <Articles />
    </>
  );
}
