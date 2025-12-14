#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../src/cli.js'
import { final, getRandomInt } from '../src/index.js'

const gameEven = () => {
  let gameResult

  for (let i = 0; i < 3; i++) {
    const number = getRandomInt(100)
    const trueAnswer = (number % 2) === 0 ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer === trueAnswer) {
      console.log('Correct!')
      gameResult = true
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`)
      gameResult = false
      break
    }
  }
  return gameResult
}

// game process
console.log('Welcome to the Brain Games!')
const name = welcome()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const result = gameEven()
final(result, name)
