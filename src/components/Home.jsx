export default function Home({ guides, onOpen, hidden }) {
  return (
    <div
      className="home-screen"
      style={{ display: hidden ? 'none' : 'flex' }}
    >
      <div className="home-hero">
        <div className="hero-eyebrow">Family Travel Guide · June–July</div>
        <div className="hero-title">
          Wallys<span>on Tour</span>
        </div>
        <div className="hero-sub">Vietnam · Singapore · Malaysia</div>
        <div className="hero-rule" />
        <div className="hero-family">Grads · Gigi · Piper · Ian · Cat</div>
      </div>

      <div className="guide-list">
        {guides.map(guide => (
          <button
            key={guide.id}
            className="guide-card"
            style={{ '--card-color': guide.color }}
            onClick={() => onOpen(guide)}
          >
            <span className="card-emoji">{guide.emoji}</span>
            <span className="card-info">
              <span className="card-title">{guide.title}</span>
              <span className="card-sub">{guide.subtitle}</span>
            </span>
            <span className="card-arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
