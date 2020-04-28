'use strict'

import React from 'react'

import { useTyping } from '../src/index'

import './styles/tailwind.css'
import './styles/index.scss'

const WORDS = [
  'I regret nothing.',
  'Never listen to Pierce.',
  'Cool cool cool.',
  'Six seasons and a movie!'
]

export default () => {
  const text = useTyping({ words: WORDS })
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <h1 className='font-bold text-3xl flex-1'>useTyping</h1>
        <p className='text-5xl' style={{ minHeight: '72px' }}>
          {text}
        </p>
      </div>
    </div>
  )
}
