import { useEffect, useState } from 'react'
import { DeskFolio } from './components/DeskFolio.jsx'
import 'deskfolio/styles.css'
import './index.css'

const RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1IPRhD5_WBcwuc7HZpy-SxQKptDbiOWvK'

// Delay (ms) after mount before the button fades in —
// long enough for the DeskFolio sticker entrance animation to finish.
const APPEAR_DELAY_MS = 1800

function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), APPEAR_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <DeskFolio />
      <a
        id="resume-download-btn"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`df-resume-btn${visible ? ' df-resume-btn--visible' : ''}`}
        aria-label="Download Resume"
      >
        <svg
          className="df-resume-btn__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Download Resume
      </a>
    </>
  )
}

export default App
