// let str = "OZHYZ38";
let str = "HKCHR9XD"
// let str = "HKCHR9X1"

const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A"]

let numbers = str.match(/\d+/g);

let newNumbers = numbers.map(each => {
  return parseInt(each) + 1
})

let modifiedStr = [];
let index = 0

for (let i = 0; i < str.length; i++) {
  let answer = alphabets.includes(str[i])
  if (!answer) {
    modifiedStr.push(newNumbers[index])
    index += 1
  } else {
    modifiedStr.push(str[i])
  }
}

let newStr = modifiedStr.join("")
newArray = []

for (let i = 0; i < newStr.length; i++) {
  let answer = alphabets.includes(newStr[i])
  if (answer) {
    let indexOfNextAlphabet = alphabets.indexOf(newStr[i]) + 1
    newArray.push(alphabets[indexOfNextAlphabet])
  } else {
    newArray.push(newStr[i])
  }
}

console.log(newArray.join(""))
