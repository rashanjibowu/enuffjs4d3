## Variables and Data Types

Unlike Java, C, C++ and certain other languages, Javascript is not a strongly typed language. No data type is specified when declaing a variable and a variable can contain any type of data. There are also 2 important syntax rules to observe.

1. Always declare a variable using `var`
2. Always end a statement using a semicolon (`;`)

Since you probably already have programming experience, we won't cover the minutiae of every data type. Instead, we'll demonstrate the ones you are likely to encounter in your journey through D3.js.

### Numerical Data (integers, floats)

```{javascript}

var apples = 5;
console.log(apples);    // 5

var daysInYear = 365.25;
console.log("There are %s days in 2 years", daysInYear * 2);    // 730.50

```

### Strings

```{javascript}

var myNameIs = "Slim Shady";
console.log(myNameIs);  // Slim Shady

```

### Booleans

```{javascript}

var isAuthorRich = false;
console.log(isAuthorRich);

```

### Constants

In truth, Javascript doesn't really have constants. However, some APIs and libraries simulate the effect of constants:

```{javascript}

console.log(Math.PI);   // 3.1415...

```

### Advanced Data Types

We'll get into advanced data types, including `Objects`, and `Arrays` in upcoming modules.

## Conclusion

Congrats! You're done! On to the [next section](../02_operators/operators.md)!