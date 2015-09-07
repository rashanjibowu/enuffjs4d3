# Conditionals

Conditional execution is all about changing the execution of your program depending on the then-current state of the program.

Equality checks, boolean variables, ternary operators will all be useful in this module.

### Using `if ... else`

Use `if` statements for simple checks

```{javascript}

var isHoliday = true;

if (isHoliday) {
    console.log("You have the day off!");       // This will execute
} else {
    console.log("Have a great day at work!");   // This will NOT execute
}

```

Here is another example:

```{javascript}

var currentAppleCount = 5;
var minimumAppleCount = 9;

if (currentAppleCount >= minimumAppleCount) {
    console.log("We have enough apples!");
} else {
    console.log("We still need %s more apples", minimumAppleCount - currentAppleCount);
}

```

Depending on your situation, the `else` clause may be optional.

### Syntax matters

While it is possible to write conditionals like this:

```{javascript}

if (isHoliday) console.log("You have the day off!");

```

... the previous version is more readable, and therefore preferable


### Using `switch`

Use `switch` statements when the variable in question can take many distinct values (or when readability is improved using this format).

```{javascript}

var season = "autumn";

switch (season) {
    case "autumn":
        console.log("The leaves are pretty!");      // This will execute
        break;
    case "winter":
        console.log("Let it snow, let it snow, let it snow");
        break;
    case "spring":
        console.log("Cherry blossoms are blooming.");
        break;
    case "summer":
        console.log("Let's go to the beach");
        break;
    default:
        console.log("Umm, I'm not sure what season that is!");
}

```

### Syntax matters

Like `if` statements, the use of blocks `{}` dramatically improves readability.

### `break`

Note the use of a `break` statement to end execution at the end of each `case` block. Without a statement to end execution, your program will continue into the next case block, which may not be what you want.

### `default`

Also note the use of a default block, which executes if none of the other cases match what is in the switch conditional. Since it is last the switch block, it does not need a `break` statement.

## Conclusion

That's it on conditionals. On to the [next module](../04_arrays/arrays.md).

