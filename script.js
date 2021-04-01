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

//Hard way
//create a start variable for first iteration
//create a end variable for last iteration
//start a while loop where start is less than end
//create a temp variable to track the iteration values from the front before switching to the back of array
//replace the start value with last value and replace end value with the temp value
//incre
const reverseAlt = (arr) =>{
  let start = 0
  let end = arr.length - 1


  // indexes
  // lenght  = 9
  // 0  8
  // 1  7
  // 2  6
  // 3  5

   
  while(start < end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++;
    end--
  }
  return arr
}

console.log(reverseAlt(numbers))





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
  string += array[i]
  i++
}

return string

}

console.log(altString(numbers))









