[![npm version](https://badge.fury.io/js/use-typing.svg)](https://badge.fury.io/js/use-typing)

# useTyping

Simulate typing with React hooks.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Getting started

`npm install --save use-typing`

## Usage

```
import { useTyping } from 'use-typing'
const PHRASES = ['I regret nothing.', 'Never listen to Pierce.', 'Cool cool cool.', 'Six seasons and a movie!']

// Passing only phrases
const text = useTyping({ phrases: PHRASES })

// Do not loop (default to true)
const text = useTyping({ phrases: PHRASES, loop: false })

// Controlling speed of typing (default to 100ms)
const text = useTyping({ phrases: PHRASES, speed: 50 })

// Pausing after a phrase (default to 2000ms)
const text = useTyping({ phrases: PHRASES, pause: 1000 })

// Setting all props
const text = useTyping({ phrases: PHRASES, loop: false, speed: 50, pause: 1000 })
```

Full example can be found [here](https://github.com/jagonzalr/useTyping/blob/master/demo/App.jsx)

## Demo

```
git clone git@github.com:jagonzalr/useTyping.git
cd useTyping
npm intall
npm start
```

## License

useTyping is [MIT licensed](./LICENSE).
