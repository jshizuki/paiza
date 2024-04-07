let str = "HKCHR9XD";

let letters = "";
let numbers = "";
let array = [];

for (let i = 0; i < str.length; i++) {
  if (isNaN(str[i])) {
    if (numbers !== "") {
      array.push(parseInt(numbers));
      numbers = "";
    }
    letters = letters.concat(str[i]);
  } else {
    numbers = numbers.concat(str[i]);
    if (letters !== "") {
      array.push(letters);
      letters = "";
    }
  }
}

if (numbers !== "") {
  array.push(parseInt(numbers));
} else if (letters !== "") {
  array.push(letters);
}

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "A",
];

let result = array.map((each, index) => {
  if (typeof each === "string") {
    let notJoined = each.split("").map((letter) => {
      let indexOfEachLetter = alphabets.indexOf(
        alphabets.find((alphabet) => alphabet === letter)
      );
      return array[index] = alphabets[indexOfEachLetter + 1];
    })
    return notJoined.join("");
  } else {
    return each + 1;
  }
});

console.log(result.join(""));

// Method 2
// let str = "HKCHR9XD"
// // let str = "HKCHR9X1"

// const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A"]

// let numbers = str.match(/\d+/g);

// let newNumbers = numbers.map(each => {
//   return parseInt(each) + 1
// })

// let modifiedStr = [];
// let index = 0

// for (let i = 0; i < str.length; i++) {
//   let answer = alphabets.includes(str[i])
//   if (!answer) {
//     modifiedStr.push(newNumbers[index])
//     index += 1
//   } else {
//     modifiedStr.push(str[i])
//   }
// }

// let newStr = modifiedStr.join("")
// newArray = []

// for (let i = 0; i < newStr.length; i++) {
//   let answer = alphabets.includes(newStr[i])
//   if (answer) {
//     let indexOfNextAlphabet = alphabets.indexOf(newStr[i]) + 1
//     newArray.push(alphabets[indexOfNextAlphabet])
//   } else {
//     newArray.push(newStr[i])
//   }
// }

// console.log(newArray.join(""))
