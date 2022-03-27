import Articles from '../Articles'

export default function Home() {
  return (
    <>
      <div className="hero container">
        <h1 className="title">
          Hello there! <span>I'm Evan Xu.</span>
        </h1>
        <h2 className="subtitle">
          On a mission to collect and sequence the best mental models for the
          good life.
        </h2>
      </div>
      <Articles />
    </>
  );
}
