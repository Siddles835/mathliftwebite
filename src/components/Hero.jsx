export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">The people behind the product</p>
      <h1>
        Meet the developers of{' '}
        <span className="accent-text">MathLift</span>
      </h1>
      <p className="lede">
        MathLift is built by a small team with a simple aim: help students
        climb further in math, and give teachers a partner they can count on.
        Three people keep the work moving — product, outreach, and the code
        itself.
      </p>
      <div className="hero-meta">
        <span>3 teammates</span>
        <span className="dot" aria-hidden="true" />
        <span>App · Outreach · Engineering</span>
      </div>
    </section>
  )
}
