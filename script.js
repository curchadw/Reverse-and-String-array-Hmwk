//Reverse an array

let numbers = [1,2,3,4,5,6,7,8,9]
let reversed = []


const reverse = array =>{
  for(let i = array.length-1; i>= 0; i--){
    reversed.push(array[i])
  }

  return reversed
}



console.log(reverse(numbers))





//Making a string out of an array
const stringArray = array =>{
let newString;
   newString = numbers.join('')

return newString
}

console.log(stringArray(numbers))

//Or
let string =''

const altString = array =>{
   let i = 0
   
while(i < array.length){
  string = string + array[i]
  i++
}

return string

}

console.log(altString(numbers))









