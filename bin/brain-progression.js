#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../src/cli.js'
import { final, getRandomFromRange, getProgression } from '../src/index.js'

const gameProgression = () => {
  let gameResult

  for (let i = 0; i < 3; i++) {
    const gameArray = getProgression()
    const hiddenItemNumber = getRandomFromRange(2, gameArray.length - 1)
    const hiddenAmount = gameArray[hiddenItemNumber - 1]
    const hiddenArray = structuredClone(gameArray)
    hiddenArray[hiddenItemNumber - 1] = '..'

    console.log(`Question: ${hiddenArray.join(' ')}`)
    const answerUser = parseInt(readlineSync.question('Your answer: '))

    if (answerUser === hiddenAmount) {
      console.log('Correct!')
      gameResult = true
    }
    else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${hiddenAmount}'.`)
      gameResult = false
      break
    }
  }
  return gameResult
}

// // game process
console.log('Welcome to the Brain Games!')
const name = welcome()
console.log('What number is missing in the progression?')
const result = gameProgression()
final(result, name)
