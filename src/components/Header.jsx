export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden="true">
          ∫
        </span>
        <span className="brand-name">MathLift</span>
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="#team">The team</a>
        <a href="#contact">For teachers</a>
      </nav>
    </header>
  )
}
