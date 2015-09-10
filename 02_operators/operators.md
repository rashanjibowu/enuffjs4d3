## Operators

Again, since we assume some programming experience, we'll scoot pass this pretty quickly. The same operator precedence rules exist in Javascript as it does for most other languages. 

**Tip:** Use parentheses to group sections of statements that you want to execute in a specific order.

**ProTip:** If you feel you need to use the tip above, consider simplifying your code by separating out calculation steps. It will make your code more readable and prevent hard-to-detect bugs.

### Assignment

To assign a value to a variable, use the assignment (`=`) operator.

```{javascript}

// Assign the value 5 to a variable named apples
var apples = 5;

```

### Equality

To check whether a variable is holding a specific value, use the equality (`==`) operator.

```
// assignment
var apples = 5;

// equality check
apples == 7;    // false
apples == 5;    // true

```

### Basic Operators

Basic Operators: `+, -, /, *` for addition, subtraction, division, and multiplication. They all do what you think they do.

### Comparison Operators

Comparison Operators: `>, >=, <, <=` for greater than, greater than or equal to, less than, and less than or equal to. These, too, all do what you think they do.

### Logical Operators

Logical Operators: `&&, ||, !` for and, or, and not, respectively. Again, these do what you think they do.

### Unary Operators

Increment: `a++, ++a`
Decrement: `a--, --a`

The only difference is in _when_ the incrementing or decrementing occurs (before or after assignment). Here is an example:

```{javascript}

var apples = 5;
apples++;

console.log(apples);    // 6

var count = apples++;
console.log(apples);    // 7 
console.log(count);     // 6, because assignment occurred BEFORE the value was incremented

count = ++apples;
console.log(count);     // 8, because value was incremented from 7 to 8, and THEN assigned to count
console.log(applies);   // 8

```

### Ternary

Ternary operators (`?`) are useful for single-line conditional execution. It works as follows

```{javascript}

(conditionToBeTested) ? statementToExecuteIfTrue : statementToExecuteIfFalse;

```

Below is an example.

```{javascript}

var enoughApples = (apples == 9) ? true : false;
console.log(enoughApples);  // false

```

### Incrementing vs. Concatenating

To increment numeric variables by more than 1, use `+=`;

```{javascript}

var numPythonCoders = 30;
numPythonCoders += 4;
console.log(numPythonCoders);   // 34

```

This same operator concatenates strings.

```{javascript}

var sentence = "Four score and seven years ago, ";
sentence += "our forefathers brought forth to this continent ";
sentence += "a new nation -- conceived in liberty ";
sentence += "and dedicated to the proposition that all men were created equal.";

console.log(sentence);  // Four score and seven years ago, our forefathers brought...created equal."

```

String concatenation in this method will prove very useful when manipulating the DOM (though, this is a code smell...).

## Conclusion

Congrats! On to the [next section](../03_conditionals/conditionals.md)!