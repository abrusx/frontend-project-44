#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../src/cli.js'
import { final, getRandomFromRange, isPrime } from '../src/index.js'

const gameProgression = () => {
  let gameResult

  for (let i = 0; i < 3; i++) {
    const numberRandon = getRandomFromRange(2, 100)
    const answerTrue = isPrime(numberRandon)

    console.log(`Question: ${numberRandon}`)
    const answerUser = readlineSync.question('Your answer: ')

    if (answerUser === answerTrue) {
      console.log('Correct!')
      gameResult = true
    }
    else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerTrue}'.`)
      gameResult = false
      break
    }
  }
  return gameResult
}

// // game process
console.log('Welcome to the Brain Games!')
const name = welcome()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
const result = gameProgression()
final(result, name)
