// .sort method. It treats numbers as strings! So watch out
function findLongestWordLength(str) {
  let array = str.split(" ");
  array.sort(function(a, b) {
    return b.length - a.length;
  });
  return array[0].length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");



// Reversing a string. This is one solution
function reverseString(str) {
    for (var reverseStr = "", i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    return reverseStr;
}
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
  

  
// Accessing Object Properties with Variables
// Another use of bracket notation on objects is to access a
//    property which is stored as the value of a variable.
//    This can be very useful for iterating through an object's properties
//    or when accessing a lookup table.
var someObj = {
    propName: "John"
};

function propPrefix(str) {
    var s = "prop";
    return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
// Note that we do not use quotes around the variable name when using it to access the property
// because we are using the value of the variable, not the name.



// This generates a random whole number WITHIN A CERTAIN RANGE
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
}
console.log(randomRange(5, 50));



// Conditional ternary operator ? Used as a shortcut for the 'if' statement
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"

// One common usage is to handle a value that may be 'null'
let greeting = person => {
  let name = person ? person.name : `stranger`
  return `Howdy, ${name}`
}
console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"

// Another example.
//Best practice when assigning variables
// Employee bonus structure: $1000 if >10% profit, $100 if not
let [profit, costs] = [120000, 100000]  // It was a good month 
let employeeBonus = (profit/costs > 1.10) ? 1000 : 100
console.log("$"+employeeBonus)  // $1000
// Here, the determination of the bonus takes just one line, so no need for if, else {} blocks

// Factorial example from FCC. This involves RECURSION. The function is calling itself.
function factorialize(num) {
  return num < 0 ? undefined : num <= 1 ? 1 : num * factorialize(num - 1);
}



// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
// Procedural approach
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// This logs: [ 5, 27, 39, 1001 ]

// Alternatively, you can use a .sort method
function largestOfFour(arr) {

  var arrNew = [];

  for(var i = 0; i < arr.length; i++){
    arrNew.push(arr[i].sort(function(a, b){
      return b-a;
    })[0]);
    // The [0] refers to the first value in the now-sorted array, which is now the HIGHEST value
  }
  return arrNew;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



// Promises!
const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

promise.then(res => {
  return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
}).then((res) => {
  console.log(res)
}, (err) => {
  alert(err)
});

// The above uses a shorter method of if... else, with ? and :
// Below produces the same result, but with if... else
const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

promise.then(res => {
  if (res === 'Alan') {
    return Promise.resolve('Hey Alan!');
  } else {
    return Promise.reject('Who are you?');
  }
}).then((res) => {
  console.log(res)
}, (err) => {
  alert(err)
});



// Write an async function, matchPromises().
// Your function should have two parameters—both functions that take no arguments and return promises.
// When invoked, matchPromises() should invoke the two function arguments and compare the two promises:
    // If the promises have the same resolved value, matchPromises() should return the string "match".
    // If the promises have different resolved values, matchPromises() should return the string "no match".
    // If either promise rejects, matchPromises() should return the string "error".
function firstFunction() {
  let number = Math.floor(Math.random() * 10)
  return new Promise(function(resolve, reject){
    if (number > 5) {
      resolve(number)
    }
    else {
      reject(number)
    }
  })
};

function secondFunction() {
  return new Promise(function(resolve){
    resolve(Math.floor(Math.random() * 10))
  })
};

async function matchPromises(firstFunction,secondFunction) {
  let result;
  try {
    let firstFunctionResult = await firstFunction();
    let secondFunctionResult = await secondFunction();
    
    if (firstFunctionResult === secondFunctionResult) {
      result = 'match';
    }
    else {
      result = 'no match'
    };
  } catch(error) {
    result = 'error'
  };
  
  console.log(result);
  return result;
}

matchPromises(firstFunction,secondFunction)



// Example of a SWITCH statement:
// Here we check the value of avgGrade with 5 different cases (inc default)
function finalGrade(num1, num2, num3) {
  if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
    return 'You have entered an invalid grade.';
  } else {
  const avgGrade = (num1 + num2 + num3) / 3;
  switch (true) {
    case (avgGrade >= 0 && avgGrade <= 59):
      return 'F';
      break;
    case (avgGrade >= 60 && avgGrade <= 69):
      return 'D';
      break;
    case (avgGrade >= 70 && avgGrade <= 79):
      return 'C';
      break;
    case (avgGrade >= 80 && avgGrade <= 89):
      return 'B';
      break;
    default:
      return 'A';
      break;
    }
  }
}

console.log(finalGrade(99, 92, 95)) // Should print 'A'



// Example of filtering arrays and returning array with only the common items
function justCoolStuff (arr1, arr2) {
  const filteredArray = arr1.filter(item => arr2.includes(item));
  return filteredArray;
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
