// Adapted from Mike Bostock's Let's Make a Bar Chart Tutorial -- accessible at http://bost.ocks.org/mike/bar/3/

// dimensions
var margin = {
	top: 20,
	right: 20,
	bottom: 30,
	left: 40
};

var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

// scales
// Use of method chaining
// Familiarity with builder pattern?
// Methodology behind scales (domains, ranges, arrays, transformations)
var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
	.range([height, 0]);

// axes
var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(10, "%");

// create an svg in the DOM
// creates a sub canvas for the drawing
var svg = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// explain callbacks as functions
// load the data from a data source
d3.tsv("data/letter_frequency.tsv", type, function(error, data) {
	if (error) throw error;

	// make sure we are getting what we think we are getting
	console.log(data);
	// notice how the data is loaded as an array
	console.log(data.length);
	// each element is an object
	console.log(data[0]);
	// ... with 2 properties ("frequency", "letter")

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

	// draw x axis
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	// draw y axis
	// split attributes versus cleaner structure below
	// different attributes depending on the content being appended
	// styling in the app code -- a code smell
	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Frequency");

	/**
	 * draw a bar for each row in the data
	 * cleaner way to specify attributes (single object)
	 * graphical elements as a function of the data (d) and index (i)
	 * the enter() selection
	 * application of a scale (as an exported function -- closure)
	 */
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
});

// converts frequency into numerical value
// executed in loading step
// applies some transformation of the data to prep for visualization
// JS trick to coerce strings to numbers
function type(d) {
	d.frequency = +d.frequency;
	return d;
}