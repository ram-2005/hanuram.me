import { useState } from 'react'
import landingIllustration from '../assets/hanuram-Signature.svg'

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <main className={`landing ${entered ? 'entered' : ''}`}>
      <div
        className="landing-background"
        style={{
          backgroundImage: `url(${landingIllustration})`,
        }}
      />

      <button
        className="enter-button"
        onClick={() => setEntered(true)}
      >
        Enter
      </button>
    </main>
  )
}

export default App
