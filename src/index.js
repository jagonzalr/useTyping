'use strict'

import { useEffect, useState, useRef } from 'react'

export const useTyping = ({
  phrases = [],
  loop = true,
  speed = 100,
  speedAfterWord = 2000
}) => {
  const charIndexRef = useRef(-1)
  const phraseIndexRef = useRef(0)

  const [charIndex, setCharIndex] = useState(-1)
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    keystroke()
  }, [])

  useEffect(() => {
    setCharIndex(charIndexRef.current)
  }, [charIndexRef.current])

  useEffect(() => {
    setPhraseIndex(phraseIndexRef.current)
  }, [phraseIndexRef.current])

  const keystroke = async () => {
    let nextDelay = speed
    if (charIndexRef.current === phrases[phraseIndexRef.current].length - 1) {
      nextDelay = speedAfterWord
      charIndexRef.current = -1
      if (phraseIndexRef.current === phrases.length - 1) {
        if (!loop) return
        phraseIndexRef.current = 0
      } else {
        phraseIndexRef.current = phraseIndexRef.current + 1
      }
    } else {
      charIndexRef.current = charIndexRef.current + 1
    }

    await delay(nextDelay)
    setCharIndex(charIndexRef.current)
    setPhraseIndex(phraseIndexRef.current)
    keystroke()
  }

  if (phrases && phrases.length > 0 && charIndex > -1) {
    return phrases[phraseIndex].slice(0, charIndex + 1)
  }

  return ''
}

// https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
const delay = (ms = 3000) => new Promise(res => setTimeout(res, ms))
