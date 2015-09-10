## Building a Bar Chart

Now that we have a good understanding of the basics of Javascript and understand the essential D3.js workflow, let's build a bar chart.

### The Data Set

The data contains 26 rows and 2 fields. One field is a unique letter in the English alphabet (i.e., "A"). The other field is the frequency of its use (i.e., "0.08324"). Our goal is to produce a bar chart where frequency is plotted on the y axis and the letters of the alphabet are plotted along the x axis. The x axis should be displayed in alphabetical order.

### Setting Dimensions

First, we need to determine the space to be occupied by your visualization. I would recommend having some margins around the rim. So, we create an [object](../06_objects/object.md) that contains margins and dimensions for the visualization.

```{javascript}

var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
};

var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

```

### Scales

Next, we need to convert the data in the dataset into representations in the visualization. For example, how tall in pixels should we show a bar whose frequency is 8%? Or, how far away from the origin should we draw the bar corresponding to "F"?

When creating a scale in D3.js, we are really creating a mapping from an input value (the data) to an output value (representation in the visualization). **The return value of a d3 scale is a _function_ that can be applied to data in the dataset**. Yup, it's a [closure](../07_functions/functions.md)!

To create a linear scale, use `d3.scale.linear()`. These are often used for continuous variables. To create a scale for categorical variables, try `d3.scale.ordinal()`.

To define the input values for a scale, chain `.domain([minValue ... maxValue])` to the scale.

To define the output values for a scale, chain `.range([minValue ... maxValue])` to the scale.

Notice how `.domain()` and `.range()` each take an array of at least 2 values as an argument. Below, we set the ranges of the x and y scales. We'll set the domains of these scales later (after we load some data).

```{javascript}

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

```

Note: `.rangeRoundBands()` is just a formatted version of `.range()` that is particularly useful for categorical data.

### Axes

Next, we should set the axes, which are built on top of the scales. By default, axes are oriented to the bottom. However, with D3 we can set other orientations which are useful when creating y axes. The code below shows the axes that we will be using.

```{javascript}

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

```

Note the use of `.ticks()`. D3 takes a best _guess_ at the number of ticks to show in the scale. Sometimes, you'll want to change that number (and its formatting) to something more to your liking. In this case, we are converting a frequency like `0.08132` to `8.132%`. By the way, when you use `.ticks()`, the number you enter for the number of ticks is a suggestion. D3 may show a different number of ticks to improve the readability of your visualization.

### Creating a canvas

At the core, visualizations are created in D3 by manipulating the structure of a web page (the "DOM", or document object model). D3 can append HTML elements like `<p>`. More often, though, D3 is used to append SVG (scalable vector graphics) elements like `<svg>`, `<rect>`, `<circle>`, `<path>`, `<text>` and others.

To learn more about the DOM, check out [DOM Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

To learn more about Scalable Vector Graphics, check out [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial).

Below, we select the `body` element in the webpage, create and add an `svg` element, and specify certain attributes using `.attr()`. In this case, we set the height and width of the svg using the dimensions calculated earlier.

Then, we append a `g` (or group) element _within_ the `svg`. `g` elements have no physical appearance. They are, however, useful for grouping and transforming collections of other elements. Here, we create a group element and position it in the top left corner, but shifted to the right and down to affect the margin.

```{javascript}

// create an svg in the DOM
// creates a sub canvas for the drawing
var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

```

**Protip:** Most D3 methods are chainable, allowing for a `.method()` syntax.

**Protip:** Most D3 methods return a "selection". In the code above, each method call preforms and action and returns a reference to the selection. The selection is ultimately stored in a variable called svg. Now, we can operate on the same selection later on in the code.

### Loading the data

We are now ready to load data. Since our data is stored as a tab-separated file, we use the `d3.tsv()` and pass in the path to the data. Many other formats are supported in the library. Check out `d3.csv()` and `d3.json()` to see the similarity in how these methods are used.

This method also takes a function as a parameter. This is called a `callback` is used _very_ often in Javascript to handle asynchronous execution. The function is executed after the loading method completes. This callback has two parameters, `error` and `data`.

```{javascript}

d3.tsv("data/letter_frequency.tsv", function(error, data) {

    // consider checking for an error

    // do something with the data
});

```

### Inspecting the data

It is helpful to check the data on load to make sure it contains what we think it contains.

```{javascript}

d3.tsv("data/letter_frequency.tsv", function(error, data) {

    // make sure we are getting what we think we are getting
    console.log(data);
    
    // notice how the data is loaded as an array
    console.log(data.length);
    
    // each element is an object with 2 properties ("frequency", "letter")
    console.log(data[0]);
});

```

### Transforming data on load

D3 also allows for some transformation of the data during the loading step. Frequency is coming in as a string, but we need it to be a number. In Javascript, you can coerce strings into numbers (if they should be numbers) using `+` before the variable name. Below, we define a function that performs this for us.

```{javascript}

// converts frequency into numerical value
// executed in loading step
// applies some transformation of the data to prep for visualization
// JS trick to coerce strings to numbers
function type(d) {
    d.frequency = +d.frequency;
    return d;
}

```

And we affect this transformation by inserting the function call as a parameter in the loading step

```{javascript}

d3.tsv("data/letter_frequency.tsv", type, function(error, data) {

});

```

### Completing the scales

Since we have access to data, we should complete the definition of our scales. Remember that `.domain()` and `.range()` each take arrays as parameters. The x axis is categorical, so we need an array of the letters of the alphabet. To create an array of the letters of the alphabet from the provided data, we can use Javascript's `array.map()` method.

```{javascript}

// generate an array of the letters of the alphabet
// use of array.map() to produce a new array
var letterDomain = data.map(function(d) {
    return d.letter;
});

```

Since the y axis is continuous and uses a linear scale, all we really need is the minimum and maximum value. The minimum value is simple, let's just use 0. The maximum is trickier. We need to walk through the entire data array, find the frequency property in each object in the array and determine the largest value of the frequency property. D3 provides utility functions, like `d3.max()`, which do this for us.

```{javascript}

// find the maximum frequency
// sets the vertical bounds of the bar chart
// d3 accessor functions for interpreting arrays
var maxFrequency = d3.max(data, function(d) {
    return d.frequency;
});

```

So, let's put it all together...

```{javascript}

d3.tsv("data/letter_frequency.tsv", type, function(error, data) {

    // error checking ...
    // data inspection ...

    // set the domains for the scales
    // generate an array of the letters of the alphabet
    // use of array.map() to produce a new array
    var letterDomain = data.map(function(d) {
        return d.letter;
    });

    // finalizing the x scale
    x.domain(letterDomain);

    // find the maximum frequency
    // sets the vertical bounds of the bar chart
    // accessor functions for interpreting arrays
    var maxFrequency = d3.max(data, function(d) {
        return d.frequency;
    });

    // finalizing the y scale
    y.domain([0, maxFrequency]);
});

```

**Protip:** Spend the time to understand d3's accessor functions. They are powerful methods that save incredible amounts of time. Use them often!

### Drawing the axes

Before we visualize the data, one more setup step is necessary -- the axes, which help us ensure that the data is plotted properly. Below we create two group elements, specify formatting and display attributes, and apply the axes. 

```{javascript}

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

```

Note the use of Javascript's `.call()`. This is a quirk of D3 treats axes. It's not critical to know the inner workings of Javascript's `.call()` method. Just look up sample axis syntax if you forget in the future.

### Visualizing the data

Let's visualize the data! Below, we select all elements with a class named "bar". Then, we bind the array data to that selection. Next, we access the "enter" selection and create new `rect` elements with a class of "bar" and the specified attributes.

```{javascript}

svg.selectAll(".bar")
        .data(data)
        .enter()
            .append("rect")
                .attr({
                    class: "bar",
                    x: function(d, i) {
                        return x(d.letter);
                    },
                    width: function() {
                        return x.rangeBand();
                    },
                    y: function(d, i) {
                        return y(d.frequency);
                    },
                    height: function(d, i) {
                        return height - y(d.frequency);
                    }
                });

```

**Protip:** Note that we are using a different form of `attr()` here. Instead of specifying each attribute separately, we can use object notation form. Use whatever makes more sense to you.

#### Binding Data

To bind data to the DOM in D3, use `.data()` and pass in the array of data. 

```{javascript}

svg.selectAll(".bar")
        .data(data)

```

#### Selecting non-existent graphical elements

It is possible that there aren't enough graphical elements in the DOM to represent every data point in the array. One example is when the visualization loads. The "enter" selection represents those graphical elements that do not yet exist. 

```{javascript}

svg.selectAll(".bar")
        .data(data)
        .enter()

```

**Protip:** Understanding the "enter" selection is **critical** when using D3 -- as are the "exit" and "update" selections. Learn more about it [here](https://github.com/mbostock/d3/wiki/Selections#enter).

#### Creating new graphical elements

As mentioned above, the "enter" selection represents those graphical elements that do not yet exist. Since they need to exist to visualize the data, we create a new `rect` for every unrepresented data point.

```{javascript}

svg.selectAll(".bar")
        .data(data)
        .enter()
            .append("rect")

```

#### Attributes as a function of the data

D3 enables graphical elements to be functions of data. In the code snippet below, we create a `rect` for every unrepresented data point. The x, y, and height attributes of the `rect` element are determined by the data. As a result, they are defined as the return value of a function `function(d, i)` where `d` is the data point in the array, and `i` is the index in the array. Yup, there is some [looping](../05_iteration/loops.md) going on in the background!

```{javascript}

svg.selectAll(".bar")
        .data(data)
        .enter()
            .append("rect")
                .attr({
                    class: "bar",
                    x: function(d, i) {
                        // x attribute uses the x-scale
                        return x(d.letter);
                    },
                    width: function() {
                        return x.rangeBand();
                    },
                    y: function(d, i) {
                        // y attribute uses the y-scale
                        return y(d.frequency);
                    },
                    height: function(d, i) {
                        // height is a function of the y-scale
                        return height - y(d.frequency);
                    }
                });

```

### Finishing up

Help others understand your visualization and give them something to play with! Try your hand with D3 by adding some labels, titles, and interactivity.

#### Labels and Titles

Try adding a title to the visualization. Consider using SVG's `text` element as sketched out below. Try centering the title and making the text standout relative to the other elements.

```{javascript}

svg.append("text")
    .attr(...)

```

#### Interactivity

Try changing the rollover states for the bars. When you rollover a bar, draw a label that shows the frequency at the top of the bar. When the mouse leaves the bar, the label should disappear. To get started, check out `on.mouseover()` and `on.mouseout()`;

### Full visualization code

Code for the fully functioning visualization can be found [here](../app) 

## Conclusion

Congrats! You're on your way to being an awesome data visualization expert. [Here's where you can go next](../09_conclusion/conclusion.md).