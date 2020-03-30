/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


//An Iterative Approach//

const vowels = ["a", "e", "i", "o", "u"]
function vowelsCounter(text) {
    // Code goes here
    let count = 0 ;

    for (let letter of text.toLowerCase()){
      if(vowels.includes(letter)){
        counter ++
      }
    }

    return counter
}


//Regular Expression//
function vowelsCounter(text) {
let matchInstances = text.match(/[aeiou]/gi) ;

if (matchInstances){
  return matchInstances.length
}else{
  return 0
}
}


module.exports = vowelsCounter;
