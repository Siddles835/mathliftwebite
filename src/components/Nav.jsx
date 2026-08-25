export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__mark" href="#top">
        MathLift
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#team">The team</a>
        <a href="#teachers">For teachers</a>
      </nav>
    </header>
  )
}
