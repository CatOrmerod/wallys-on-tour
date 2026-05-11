import { useState } from 'react'
import Home from './components/Home.jsx'
import GuidePage from './components/GuidePage.jsx'

// ─────────────────────────────────────────────
// GUIDE METADATA
// To add a new guide: add an entry here and
// create a matching file in src/guides/
// ─────────────────────────────────────────────
export const GUIDES = [
  { id: 'pretravel',  emoji: '🌏', title: 'Pre-Travel',       subtitle: 'Night before departure',     color: '#1a1a2e' },
  { id: 'hcmc',       emoji: '🏙',  title: 'Ho Chi Minh City', subtitle: 'Days 1–6 · 20–25 June',      color: '#1a3040' },
  { id: 'cantho',     emoji: '🚤', title: 'Can Tho',           subtitle: 'Days 6–8 · 25–27 June',      color: '#1a3a4a' },
  { id: 'hoian',      emoji: '🏮', title: 'Hội An',            subtitle: 'Days 8–12 · 27 Jun–1 Jul',   color: '#5a3016' },
  { id: 'hue',        emoji: '👑', title: 'Huế',               subtitle: 'Days 12–14 · 1–3 July',      color: '#2a1a0a' },
  { id: 'bana',       emoji: '🌉', title: 'Ba Na Hills',         subtitle: 'Day 14–15 · 3–4 July',        color: '#1a3a20' },
  { id: 'danang',     emoji: '🌊', title: 'Da Nang',           subtitle: 'Days 15–17 · 4–6 July',      color: '#1a3a4a' },
  { id: 'singapore',  emoji: '🦁', title: 'Singapore',         subtitle: 'Days 17–21 · 6–10 July',     color: '#1a2d3d' },
  { id: 'kl',         emoji: '🏙',  title: 'Kuala Lumpur',      subtitle: 'Days 22–23 · 11–12 July',    color: '#8b1a1a' },
  { id: 'food',       emoji: '🍜', title: 'Food Guide',        subtitle: 'What to eat & drink',         color: '#1a1208' },
  { id: 'phrases',    emoji: '🗣️', title: 'Phrases',             subtitle: 'Vietnamese & Malay',          color: '#2a1a3a' },
]

export default function App() {
  const [activeGuide, setActiveGuide] = useState(null)

  return (
    <div style={{ height: '100vh', overflow: 'hidden', background: '#0e0c09' }}>
      <Home
        guides={GUIDES}
        onOpen={setActiveGuide}
        hidden={activeGuide !== null}
      />
      {GUIDES.map(guide => (
        <GuidePage
          key={guide.id}
          guide={guide}
          active={activeGuide?.id === guide.id}
          onBack={() => setActiveGuide(null)}
        />
      ))}
    </div>
  )
}
