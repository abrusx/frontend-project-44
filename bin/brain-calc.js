#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../src/cli.js'
import { final, getRandomFromRange, getRandomMathOperator } from '../src/index.js'

const gameCalc = () => {
  let gameResult

  for (let i = 0; i < 3; i++) {
    const operandFirst = getRandomFromRange(1, 30)
    const operandSecond = getRandomFromRange(1, 20)
    const operator = getRandomMathOperator()
    let answerTrue = 0

    switch (operator) {
      case '+':
        answerTrue = operandFirst + operandSecond
        break
      case '-':
        answerTrue = operandFirst - operandSecond
        break
      case '*':
        answerTrue = operandFirst * operandSecond
        break
      default:
        answerTrue = 0
    }

    console.log(`Question: ${operandFirst} ${operator} ${operandSecond}`)
    const answerUser = parseInt(readlineSync.question('Your answer: '))

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

// game process
console.log('Welcome to the Brain Games!')
const name = welcome()
console.log('What is the result of the expression?')
const result = gameCalc()
final(result, name)
