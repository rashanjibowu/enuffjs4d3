# Objects

Almost _everything_ in Javascript is an object. However, we'll talk more about that fact in a later module.

In this module, we use the term object to describe an _object literal_ -- an arbitrary set of key-value pairs. They are collections of related properties and enable a certain _realism_ when writing complex programs.

## Creating an object:

```{javascript}

var myObject = {};  // an empty object

```

Unlike arrays, objects are not sequences or lists. Instead, they are more like python's dicts. 

## A Complex Object

```{javascript}

var person = {
    eyeCount: 2,
    eyeColor: "brown",
    hairColor: "black",
    isFemale: true,
    weight: 107,
    height: 1.6,
    favoriteThings: ["Monopoly", "play dough", "roses", "diamonds", "politics"],
    favoriteBook: {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "long books"        
    }
};

```

**Syntax matters**

Notice how objects can contain values of varying data types. While arrays _can_ do this, they are generally not used in this way. FOr objects, however, they were _designed_ for this kind of use.

The assignment operator (`=`) is used to assign the object literal to a variable. It has no place within the object itself.

Each key-value pair is separated by a comma (and _should_ be on its own line)

### Accessing a specific property

Use the `.` operator to access a specific property in an object
 
```{javascript}

console.log(person.eyeCount);       // 2
console.log(person.name);           // undefined
console.log(person.eyecount);       // undefined

var numFavoriteThings = person.favoriteThings.length;
console.log(numFavoriteThings);     // 5

// list out the person's favorite things
for (var i = 0; i < numFavoriteThings; i++) {
    console.log(person.favoriteThings[i]);
}

// same thing, but a little more readable
person.favoriteThings.forEach(function(thing) {
    console.log(thing); 
});

```

### Assigning a specific property

Properties of objects can be treated just like regular variables. The assignment operator (and all other operators work as usual).

```{javascript}

person.name = "Elizabeth Johnson";
console.log(person.name);           // "Elizabeth Johnson"

```

### Iterating through properties in an object

Yes, this is possible. Check out `for...in`. Since it's not critical for our purposes, let's skip this.

## Conclusion

Congrats! You're done with the basics of objects. Let's move on to [functions](07_functions/functions.md).

