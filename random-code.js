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
/* Another use of bracket notation on objects is to access a
    property which is stored as the value of a variable.
    This can be very useful for iterating through an object's properties
    or when accessing a lookup table. */
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

// Another example
let [profit, costs] = [120000, 100000]  // It was a good month 
// Employee bonus structure: $1000 if >10% profit, $100 if not
let employeeBonus = (profit/costs > 1.10) ? 1000 : 100
console.log("$"+employeeBonus)  // $1000




