export const final = (result, name) => {
  if (result) {
    console.log(`Congratulations, ${name}!`)
  } else {
    console.log(`Let's try again, ${name}!`)
  }
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

export function getRandomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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