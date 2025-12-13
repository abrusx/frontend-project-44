#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../src/cli.js'

const game = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let gameResult
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    const number = getRandomInt(100)
    const trueAnswer = (number % 2) === 0 ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ');

    if (answer === trueAnswer) {
      console.log('Correct!')
      gameResult = true
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`)
      gameResult = false
      break
    }
  }

  return gameResult
}

const final = (result) => {
  if (result) {
    console.log(`Congratulations, ${name}!`)
  } else {
    console.log(`Let's try again, ${name}!`)
  }
}

// game process
console.log('Welcome to the Brain Games!');
const name = welcome()
const result = game()
final(result)
