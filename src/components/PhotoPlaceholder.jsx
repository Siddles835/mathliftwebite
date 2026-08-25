export default function PhotoPlaceholder({ initials, name }) {
  return (
    <div className="photo-placeholder" aria-label={`Photo placeholder for ${name}`}>
      <svg
        className="photo-placeholder__silhouette"
        viewBox="0 0 160 180"
        aria-hidden="true"
      >
        <circle cx="80" cy="58" r="28" />
        <path d="M32 158c6-34 26-52 48-52s42 18 48 52H32Z" />
      </svg>
      <span className="photo-placeholder__initials">{initials}</span>
      <span className="photo-placeholder__caption">Photo coming soon</span>
    </div>
  )
}
