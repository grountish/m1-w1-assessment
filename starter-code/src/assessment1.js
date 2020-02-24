// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a
  }
  else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
   sum += numbers[i] 
  }
  
  return sum 
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let newArr = numbers.sort((a,b)=> b-a)
  return newArr[0]
}

// Return the longest string in an array
function longestString(strings) {
  let strings2 = strings.sort((a,b)=> b-a)
  return strings2[0]
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let i = wordsArr.includes(word)
  return i
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
 for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i].indexOf() === wordsArr[i].lastIndexOf()
  return wordsArr[i]   
 }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
 let flatArray = matrix.flat()
 let sortedMatric = flatArray.sort((a,b)=> b-a)
 return sortedMatric[0]
}