'use strict'

import { useEffect, useState, useRef } from 'react'

export const useTyping = ({
  words = [],
  loop = true,
  speed = 100,
  speedAfterWord = 2000
}) => {
  const charIndexRef = useRef(-1)
  const wordIndexRef = useRef(0)

  const [charIndex, setCharIndex] = useState(-1)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    keystroke()
  }, [])

  useEffect(() => {
    setCharIndex(charIndexRef.current)
  }, [charIndexRef.current])

  useEffect(() => {
    setWordIndex(wordIndexRef.current)
  }, [wordIndexRef.current])

  const keystroke = async () => {
    let nextDelay = speed
    if (charIndexRef.current === words[wordIndexRef.current].length - 1) {
      nextDelay = speedAfterWord
      charIndexRef.current = -1
      if (wordIndexRef.current === words.length - 1) {
        if (!loop) return
        wordIndexRef.current = 0
      } else {
        wordIndexRef.current = wordIndexRef.current + 1
      }
    } else {
      charIndexRef.current = charIndexRef.current + 1
    }

    await delay(nextDelay)
    setCharIndex(charIndexRef.current)
    setWordIndex(wordIndexRef.current)
    keystroke()
  }

  if (words && words.length > 0 && charIndex > -1) {
    return words[wordIndex].slice(0, charIndex + 1)
  }

  return ''
}

// https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
const delay = (ms = 3000) => new Promise(res => setTimeout(res, ms))
