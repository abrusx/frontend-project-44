export const final = (result, name) => {
  if (result) {
    console.log(`Congratulations, ${name}!`)
  }
  else {
    console.log(`Let's try again, ${name}!`)
  }
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function getRandomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomMathOperator() {
  const randomNumber = getRandomFromRange(1, 90)
  let result = ''

  switch (true) {
    case randomNumber <= 20:
      result = '+'
      break
    case randomNumber <= 40:
      result = '-'
      break
    case randomNumber <= 60:
      result = '*'
      break
    default:
      result = '+'
  }

  return result
}

export function getGCD(a, b) {
  if (b === 0) {
    return Math.abs(a)
  }
  return getGCD(b, a % b)
}

export function getProgression() {
  const resultArray = []
  const amountRandom = getRandomFromRange(8, 12)
  const stepRandom = getRandomFromRange(2, 6)
  let index = 0

  for (let i = 0; i < amountRandom; i++) {
    index = index + stepRandom
    resultArray.push(index)
  }

  return resultArray
}

export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 'no'
  }
  return 'yes'
}
