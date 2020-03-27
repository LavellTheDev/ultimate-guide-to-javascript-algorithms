/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format.
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//ES5
////////Chaining Built in Methods:///////////
// function reverseString(text) {
//     return text.split("").reverse().join("");
// }

//ES6
function reverseString(text){
  return[...text].reverse().join('')
}
module.exports = reverseString


//ES5
//////For Loop:///////////
// function reverseString(text) {
//     let result = "";
//     for (let i = text.length - 1; i >= 0; i--) {
//       resule += text[i]
//     }
//     return result;
// }

//ES6
function reverseString(text){
  let result = "";
  for (let char of text) {
    result = char + result
  }
  return result;
}

//ES5
//////Recursion:///////////
function reverseString(text) {
  if(text === ""){
    return ""
  }else {
    return reverseString(text.substr(1)) + text[0]
  }
}

//ES6
function reverseString(text){
  let result = "";
  for (let char of text) {
    result = char + result
  }
  return result;
}
