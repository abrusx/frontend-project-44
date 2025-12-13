#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../src/cli.js'
import { final, getRandomFromRange, getGCD } from '../src/index.js'

const gameGCD = () => {
  let gameResult
  console.log('What is the result of the expression?')

  for (let i = 0; i < 3; i++) {
    const operandFirst = getRandomFromRange(1, 100)
    const operandSecond = getRandomFromRange(1, 100)
    const answerTrue = getGCD(operandFirst, operandSecond)

    console.log(`Question: ${operandFirst} ${operandSecond}`)
    const answerUser = parseInt(readlineSync.question('Your answer: '))

    if (answerTrue === answerUser) {
      console.log('Correct!')
      gameResult = true
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerTrue}'.`)
      gameResult = false
      break
    }
  }
  return gameResult
}

// // game process
console.log('Find the greatest common divisor of given numbers.')
const name = welcome()
const result = gameGCD()
final(result, name)
