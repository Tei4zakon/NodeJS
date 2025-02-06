const numbers = [25, 3, 78, 49, 96, 13, 4, 53];

// filter
const biggerThan25 = numbers.filter((num) => num > 25);
console.log("Numbers bigger than 25 are:", biggerThan25);

// sort

const sortNums = numbers.sort((a, b) => a - b)
console.log("Sorted numbers:", sortNums)

// reduce

const sumNums = numbers.reduce((acc, curr) => (acc += curr), 0)
console.log("The sum of numbers is:", sumNums)

// find

const findNum = numbers.find((num) => num - 25 === 24)
console.log("The number is:", findNum)