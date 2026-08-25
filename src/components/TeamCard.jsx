export default function TeamCard({ person, isOpen, onToggle }) {
  return (
    <article
      className={`team-card${isOpen ? ' is-open' : ''}${
        person.isPrimaryContact ? ' is-contact' : ''
      }`}
    >
      <PhotoSlot person={person} />
      <div className="card-body">
        {person.isPrimaryContact && (
          <p className="contact-pill">Primary teacher contact</p>
        )}
        <h3>{person.name}</h3>
        <p className="role">{person.role}</p>
        <p className="summary">{person.summary}</p>
        <button
          type="button"
          className="more-btn"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          {isOpen ? 'Hide details' : 'More about this role'}
        </button>
        {isOpen && (
          <ul className="details">
            {person.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

function PhotoSlot({ person }) {
  if (person.photo) {
    return (
      <div className="photo-slot has-photo">
        <img src={person.photo} alt={`Portrait of ${person.name}`} />
      </div>
    )
  }

  return (
    <div className="photo-slot" aria-label={`Photo placeholder for ${person.name}`}>
      <span className="initials">{person.initials}</span>
      <span className="photo-hint">Photo coming soon</span>
    </div>
  )
}
