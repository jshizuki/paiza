// const input = lines[0];
const input = "PAIZA"
const split_input = input.split("")

const replacements = {
  "A": "4",
  "E": "3",
  "G": "6",
  "I": "1",
  "O": "0",
  "S": "5",
  "Z": "2"
}

const answer = split_input.map(each => {
  return each = replacements[each] || each
}).join("")

console.log(answer)

// const answer = split_input.map(each => {
//     switch(each) {
//         case "A":
//             return "4"
//             break
//         case "E":
//             return "3"
//               break
//         case "G":
//             return "6"
//             break
//         case "I":
//             return "1"
//             break
//         case "O":
//             return "0"
//             break
//         case "S":
//             return "5"
//             break
//         case "Z":
//             return "2"
//             break
//         default:
//             return each
//     }
// })
// console.log(answer.join(""))
