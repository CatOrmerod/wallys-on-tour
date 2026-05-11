import { useState, useEffect, useRef } from 'react'
import parse, { attributesToProps } from 'html-react-parser'

const guideModules = {
  pretravel:  () => import('../guides/pretravel.js'),
  hcmc:       () => import('../guides/hcmc.js'),
  cantho:     () => import('../guides/cantho.js'),
  hoian:      () => import('../guides/hoian.js'),
  hue:        () => import('../guides/hue.js'),
  danang:     () => import('../guides/danang.js'),
  singapore:  () => import('../guides/singapore.js'),
  kl:         () => import('../guides/kl.js'),
  food:       () => import('../guides/food.js'),
  phrases:    () => import('../guides/phrases.js'),
  bana:       () => import('../guides/bana.js'),
}

export default function GuidePage({ guide, active, onBack }) {
  const [content, setContent] = useState(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (active && !content) {
      guideModules[guide.id]().then(mod => {
        const fixed = mod.default.replace(/src="\/images\//g, 'src="/wallys-on-tour/images/')
        setContent(parse(fixed, {
          replace(node) {
            if (node.name === 'img') {
              const props = attributesToProps(node.attribs)
              return <img {...props} onError={e => { e.currentTarget.style.display = 'none' }} />
            }
          }
        }))
      })
    }
  }, [active])

  useEffect(() => {
    if (active && contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }, [active])

  return (
    <div className={`guide-page ${active ? 'active' : ''}`}>
      <div className="guide-topbar" style={{ background: guide.color }}>
        <button className="back-btn" onClick={onBack}>‹ Home</button>
        <div className="topbar-title">{guide.emoji} {guide.title}</div>
        <div style={{ width: 70 }} />
      </div>
      <div ref={contentRef} className="guide-content">
        {content ?? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '200px', fontFamily: 'EB Garamond, serif',
            fontSize: '18px', color: '#8b4513', opacity: 0.6
          }}>
            Loading…
          </div>
        )}
      </div>
    </div>
  )
}
