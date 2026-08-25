import PhotoPlaceholder from './PhotoPlaceholder.jsx'

export default function PersonCard({ person }) {
  return (
    <article className="person-card" id={person.id}>
      <PhotoPlaceholder initials={person.initials} name={person.name} />
      <div className="person-card__body">
        <p className="person-card__role">{person.role}</p>
        <h3 className="person-card__name">{person.name}</h3>
        {person.highlight ? (
          <p className="person-card__highlight">{person.highlight}</p>
        ) : null}
        <p className="person-card__bio">{person.bio}</p>
      </div>
    </article>
  )
}
