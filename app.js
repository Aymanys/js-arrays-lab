//EX 1
const foods = []
console.log(foods)
//Ex 2
foods.push('pizza', 'cheeseburger')
console.log(foods)
//EX 3
foods.unshift('taco')
console.log(foods)
//EX 4
const favFood = foods[1]
console.log(favFood)
//Ex 5
foods.splice(2, 0, 'tofu')
console.log(foods)
//EX 6
foods.splice(1, 1, 'sushi', 'cupcake')
console.log(foods)
//Ex 7
const yummy = foods.slice(1, 3)
console.log(yummy)
//EX8
const soyIdx = foods.indexOf('tofu')
console.log(soyIdx)
//EX9
const allFoods = foods.join(' -> ')
console.log(allFoods)
//EX10
const hasSoup = foods.includes('soup')
console.log(hasSoup)
//EX11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
const odds = []
for (let num of nums) {
  if (num % 2 !== 0) {
    odds.push(num)
  }
}
console.log(odds)
//EX12
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
]
const numList = numArrays[numArrays.length - 1]
console.log(numList)
//EX13
const num = numArrays[2][1]
console.log(num)
//EX14
let total = 0
for (let arrays of numArrays) {
  for (let num of arrays) {
    total += num
  }
}
//EX15
console.log(total)
