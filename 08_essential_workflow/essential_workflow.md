
## The Essential D3 Workflow

![D3 Logo](../logos/d3_logo_100.png)  ![HTML5 Logo](../logos/html5_logo_100.png)   ![CSS Logo](../logos/CSS3_logo_100.png)    ![SVG Logo](../logos/svg_logo_100.png)    ![Javascript Logo](../logos/js_logo_100.png)

D3 combines an understanding of the Document Object Model ("DOM"), Scalable Vector Graphics, and Javascript to make rich visualizations of data. The essential workflow pattern is as follows:

### Setting Up Your Visualization

1. Load your data
2. Set physical boundaries for how and where the visualization will render in the browser
3. Determine how the values in the data will map onto the viewport

### Building the Visualization

1. Select 0 or more elements on a web page (within the DOM) to represent your data (`d3.select()` / `d3.selectAll()`)
    For example, a series of rectangles may represent frequencies for a bar chart. Note that the elements may not yet exist on the page!
2. Bind your data to those elements (`selection.data()`)
3. Create new graphical elements for unrepresented data (`selection.enter() --> selection.append()`)

### Adding Context, Bells, and Whistles

1. Add any axes or labels that will help the viewer understand your visualization
2. Add interactivity (rollover states, click response, etc.)

## Let's start visualizing data!

[Let's Build a Bar Chart!](build_bar_chart.md)
