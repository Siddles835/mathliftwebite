import { team } from '../data/team.js'
import PersonCard from './PersonCard.jsx'

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team__intro">
        <p className="eyebrow">The team</p>
        <h2>Three people, one application.</h2>
        <p>
          Photos will be added here. Until then, each card uses a placeholder
          portrait so the layout is ready.
        </p>
      </div>
      <div className="team__grid">
        {team.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  )
}
