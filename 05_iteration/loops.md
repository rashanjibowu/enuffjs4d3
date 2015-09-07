## Loops

Javascript supports 2 main loops: `for` and `while`. There are other loops, but they are really variants on these 2 base loop types. Variants on the for loop include `forEach` and `for...in`, which are used with arrays and objects, respectively. Variants on the `while` loop include `do...while`.

`for` loops execute a pre-defined number of times. Here is an example.

```{javascript}

var minimumAppleCount = 9;

/* for as along as the currentAppleCount is less than or equal to the minimumAppleCount, increment the currentAppleCount by 1*/
for (var currentAppleCount = 0; currentAppleCount <= minimumAppleCount; currentAppleCount++) {

    // calculate the current differential
    var diff = minimumAppleCount - currentAppleCount;

    if (diff > 0) {
        // output the number of apples needed
        if (diff == 1) {
            console.log("We need 1 more apple");    
        } else {
            console.log("We need %s more apples", diff);    
        }    
    } else {
        console.log("We have enough apples!");
    }
}

```
When `while` loops execute, there may not be a predefined number of loops. In D3.js, `for` loops (and their variants) reign supreme, so let's focus on those.

### Stopping iteration

Use `break` or `return` to terminate a loop and return control flow to the next execution statement.

```{javascript}

var minimumAppleCount = 9;

for (var currentAppleCount = 0; currentAppleCount <= minimumAppleCount; currentAppleCount++) {

    // terminate loop when we get 2 apples
    if (currentAppleCount == 2) {
        break;
    }

    var diff = minimumAppleCount - currentAppleCount;

    if (diff > 0) {
        if (diff == 1) {
            console.log("We need 1 more apple");      // This is never executed
        } else {
            console.log("We need %s more apples", diff);    
        }    
    } else {
        console.log("We have enough apples!");        // This is never executed
    }
}

```

### Skipping iteration

Use `continue` to skip an iteration of the currently executing loop. Control flow is retained by the loop.

```{javascript}

var minimumAppleCount = 9;

for (var currentAppleCount = 0; currentAppleCount <= minimumAppleCount; currentAppleCount++) {

    // skip iteration when we get 4 apples
    if (currentAppleCount == 4) {
        continue;
    }

    var diff = minimumAppleCount - currentAppleCount;

    if (diff > 0) {
        if (diff == 1) {
            console.log("We need 1 more apple");      
        } else {
            console.log("We need %s more apples", diff);    // Executed 1 less time
        }    
    } else {
        console.log("We have enough apples!");        
    }
}

```

I'd highly recommend checking out <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array> for a detailed overview of all of the wonderful things you can do with Javascript arrays. Personal favorites include `array.forEach()`, `array.push()`, `array.filter()`, and `array.map()`.

## Conclusion

Now, let's look through [objects](06_objects/objects.md), D3's other powerhouse data type.