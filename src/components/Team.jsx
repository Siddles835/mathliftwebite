import { team } from '../data/team.js'
import PersonCard from './PersonCard.jsx'

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team__intro">
        <p className="eyebrow">The team</p>
        <h2>Three people, one application.</h2>
        <p>
          Lalith, Jayanth, and Sidhaanth keep MathLift moving — from the product
          itself to the classrooms that use it.
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
