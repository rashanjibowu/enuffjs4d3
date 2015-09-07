## Arrays

Arrays are pretty awesome. They contain multiple data and can contain multiple types of data. Here are some examples.

```{javascript}

var myData = [];    // an empty array

var yourData = new Array();

var bigData = [20]; // an array with 20 elements in it -- all empty

```

### Assigning data to arrays

You can assign values at array construction.

```{javascript}

var names = ["Larry", "Curly", "Moe"];  // array created with 3 strings
console.log(names);

```

### Accessing array values

You can access a specific element in an array by index

```{javascript}

console.log(names[2]);      // "Moe"
console.log(names[0]);      // "Larry"

```

**Note:** Arrays are zero-indexed.

You will often need the length of an array. You can get it using the `length` property of an array.

```{javascript}

var nameCount = names.length;
console.log(nameCount);         // 3

```

**ProTip**: When trying to access the last item in an array, don't forget that arrays are zero-indexed.

```{javascript}

names[names.length];            // undefined
names[names.length - 1];        // "Moe"

```

### Setting values

```{javascript}

names[2] = "John";
console.log(names);     // "Larry", "Curly", "John"

```

Mixed type arrays are legal. Therefore, you can set values of any type in any element of an array

```{javascript}

names[0] = 3.14;
console.log(names);     // 3.14, "Curly", "John"

```

**ProTip:** Arrays are **the** functional data type for D3.js. It is _well_ worth your time to fully explore the rich API that Javascript provides out of the box for working with arrays.

## Conclusion

Things are about to get a little [loopy](../05_iteration/loops.md)!