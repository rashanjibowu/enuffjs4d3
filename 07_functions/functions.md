## Functions

Functions are reusable pieces of code that _may_ take an input, performs some work, and _may_ return a value.

### A basic function:

```{javascript}

function printThis(inputString) {
    console.log(inputString);
}

```

### Basic function with return value

```{javascript}

function squareMe(number) {
    return number * number;
}

```

### Basic function using a predefined function

```{javascript}

function calcArea(radius) {
    return Math.PI * radius * radius;
}

```
**Syntax matters**

### Declare and define simultaneously

Some programming languages allow for programmers to declare and function and define it later. Javascript is not such a language.

### Defining a function

Note that functions are declared using the keyword `function`, followed by the name of the function and parentheses. Any inputs must be named between the parentheses as a comma separated list. 

Functions are defined by including implementation details within the block `{}`. For example:

```{javascript}

function getFriendsByGender(number, boolean, array) {
    // implementation of some algorithm that detects gender from name
}

```

Note that for function definitions, no semicolon is necessary at the end of the statement.

### `return`

The `return` keyword marks the end of execution for a function. If there is a value following the keyword, that value is returned. Otherwise, the function stops execution. `return` can also stop the execution of loops.

### Scope

Functions have access to variables that are "within its scope". In the following example, `apples` is in the `global` scope, so the function `getAppleCount()` can access it. In fact, anything can access `apple`. 

```{javascript}

var apples = 5;

function getAppleCount() {
    return apples;
}

getAppleCount();        // returns 5

```

FYI: For production software, global variables are indicative of a code smell and should be avoided.

However, in the following example, the variable `updatedAppleCount` was created _within_ the `incrementAppleCount()` function. The variable is _local_ to that function. The rest of the world (the outer scope) knows nothing about this variable and does not have access to it. Thus, functions are often used to achieve encapsulation.

```{javascript}

var apples = 5;

function incrementAppleCount() {
    var updatedAppleCount = apples + 1;
    return updatedAppleCount;
}

console.log(updatedAppleCount);     // undefined

```

### Functions can be stored as variables

This is legal -- and when using the D3 library, we use this technique often, especially for scales.

```{javascript}

var aFunction = function() {
    // do something
};

```

Note that since this is an assignment to a variable, a semi-colon **is** necessary at the end of the statement.

### Calling a function

To call a function, simply type the function name, followed immediately by parentheses and any input values. Here is an example:

```{javascript}

// First example
calcArea(5);    // 78.54

// complicated example
var isFemale = true;
var friends = ["Jerry", "George", "Elaine", "Kramer"];
var minNumChars = 3;

getFriendsByGender(minNumChars, isFemale, friends);

```

**Protip:** Note that it is customary to define functions at the bottom of the scope in which the function needs access, even if you use the function earlier in your code. When the browser interprets your code, your functions will be made available within its scope before execution. That means you can define your function anywhere in that scope. For improved readability, we often place function definitions at the bottom of the scope in which it needs access.

### Functions can produce other functions 

Functions can retain their original scope even if called in some other context. Check out the below example.

```{javascript}

// define a function and creates another function
function makeFunc() {

    // this text exists only in the scope of makeFunc()
    var text = "Adapted from Mozilla";

    // the text is accessible to other functions that are created in the same scope
    function displayText() {
        alert(text);
    }

    // A FUNCTION is returned (with knowledge of the scope in which it was created)
    return displayText;                 
};

// the function is called and its return value is stored in another variable
var myFunc = makeFunc();

// since the variable holds a function, that function can be invoked using ()
myFunc();

```

This is called a closure, and is an advanced concept in Javascript. D3.js makes use of this pretty often, especially with scales.

### Predefined Functions

There are tons of predefined functions that come with Javascript right of the box. Others are enabled through libraries like D3.js. Below are a few examples:

```{javascript}

// produce a random float between 0 and 1
var randomNum = Math.random();  

// rounds a number to the nearest integer
Math.round(randomNum);

// prints contents of a variable to the console.
console.log(randomNum);

// prints contents to standard error
console.error("Error text!");

// adds an element, the number 5 in this case, to the array
myArray.push(5);

// loads data in csv format
d3.csv();

// selects an element in the DOM
d3.select("XXX");

// appends content to an element
d3.append("XXX");

```

## Conclusion

So, that's it for the basics of Javascript. You're now ready to start messing around with D3.js! Let's checkout the [essential workflow](../08_essential_workflow/essential_workflow.md).