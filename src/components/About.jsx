export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__copy">
        <p className="eyebrow">About the application</p>
        <h2>MathLift, in brief.</h2>
        <p>
          MathLift is a mathematics application created to help students practice
          and understand math more clearly. The team behind it keeps the product
          running, builds new features, and partners with teachers who want to
          use it in class.
        </p>
      </div>
      <ul className="about__roles">
        <li>
          <span>App Manager</span>
          Lalith Durbhakula
        </li>
        <li>
          <span>Outreach / PR</span>
          Jayanth Savitala
        </li>
        <li>
          <span>Developer</span>
          Sidhaanth Kapoor
        </li>
      </ul>
    </section>
  )
}
