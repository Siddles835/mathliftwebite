import { team } from '../data/team.js'
import TeamCard from './TeamCard.jsx'

export default function Team({ selectedId, onSelect }) {
  return (
    <section className="team" id="team">
      <div className="section-heading">
        <p className="eyebrow">The crew</p>
        <h2>Who builds MathLift</h2>
        <p>
          Photos will land here when they are ready. Until then, each card
          holds a placeholder you can replace with a portrait.
        </p>
      </div>
      <div className="team-grid">
        {team.map((person) => (
          <TeamCard
            key={person.id}
            person={person}
            isOpen={selectedId === person.id}
            onToggle={() =>
              onSelect(selectedId === person.id ? null : person.id)
            }
          />
        ))}
      </div>
    </section>
  )
}
