import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import landingIllustration from '../assets/landing/hanuram-Signature.svg'
import discoBall from '../assets/disco/DiscoBall.png'
import discoMusic from '../assets/sorgam-mahuvile.wav'

import dancer1 from '../assets/dancers/cat-dance-happy-dance-cat.gif'
import dancer2 from '../assets/dancers/catdancing.gif'
import dancer3 from '../assets/dancers/cat-meme.gif'
import dancer4 from '../assets/dancers/dancing-cats-dancing-cat.gif'
import dancer5 from '../assets/dancers/dancing-chipmunk-dog-meme.gif'
import dancer6 from '../assets/dancers/dancingToothless.gif'
import dancer7 from '../assets/dancers/dancingTriangle.gif'
import dancer8 from '../assets/dancers/dancingWolf.gif'
import dancer9 from '../assets/dancers/flying-cow-floating-cow.gif'
import dancer10 from '../assets/dancers/nodding-cat-dancing-meme.gif'
import dancer11 from '../assets/dancers/ratdancing.gif'
import dancer12 from '../assets/dancers/skeleton-dancing-skeleton.gif'
import dancer13 from '../assets/dancers/spongebobdancing.gif'
import dancer14 from '../assets/dancers/yellow-dance.gif'

function App() {
  const [entered, setEntered] = useState(false)
  const audioRef = useRef(null)

  const dancers = [
    dancer1,
    dancer2,
    dancer3,
    dancer4,
    dancer5,
    dancer6,
    dancer7,
    dancer8,
    dancer9,
    dancer10,
    dancer11,
    dancer12,
    dancer13,
    dancer14,
  ]

  const handleEnter = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(discoMusic)
      audioRef.current.volume = 0.7
      audioRef.current.loop = true
    }

    audioRef.current
      .play()
      .then(() => {
        setEntered(true)
      })
      .catch((error) => {
        console.error('Unable to play audio:', error)
        setEntered(true)
      })
  }

  return (
    <main className={`landing ${entered ? 'entered' : ''}`}>

      {/* Background illustration */}
      <div
        className="landing-background"
        style={{
          backgroundImage: `url(${landingIllustration})`,
        }}
      />

      {/* Disco lights */}
      {entered && (
        <div
          className="disco-lights"
          aria-hidden="true"
        >
          {/* Light beams */}
          <div className="light-beam light-beam-1" />
          <div className="light-beam light-beam-2" />
          <div className="light-beam light-beam-3" />
          <div className="light-beam light-beam-4" />

          {/* Reflection spots */}
          <div className="light-spot light-spot-1" />
          <div className="light-spot light-spot-2" />
          <div className="light-spot light-spot-3" />
          <div className="light-spot light-spot-4" />
          <div className="light-spot light-spot-5" />
          <div className="light-spot light-spot-6" />
        </div>
      )}

      {/* Disco ball */}
      <AnimatePresence>
        {entered && (
          <motion.div
            className="disco-ball"
            initial={{
              y: '-120vh',
              rotate: -15,
            }}
            animate={{
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={discoBall}
              alt="Disco ball"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dancing GIFs */}
      {entered && (
        <div
          className="dancers"
          aria-hidden="true"
        >
          {dancers.map((dancer, index) => (
            <motion.img
              key={index}
              src={dancer}
              alt=""
              className={`dancer dancer-${index + 1}`}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.7 + index * 0.08,
                duration: 0.4,
                ease: 'backOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Entrance / building message */}
      <div className="entrance-content">
        <AnimatePresence mode="wait">

          {!entered ? (
            <motion.div
              key="enter"
              className="enter-content"
              initial={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="enter-message">
                Click here to know more
              </p>

              <button
                className="enter-button"
                onClick={handleEnter}
              >
                Enter
              </button>
            </motion.div>
          ) : (
            <motion.p
              key="building"
              className="building-message"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.5,
                duration: 0.8,
              }}
            >
              Still building...
              <br />
              Will come soon.Until then enjoy this
            </motion.p>
          )}

        </AnimatePresence>
      </div>

    </main>
  )
}

export default App
