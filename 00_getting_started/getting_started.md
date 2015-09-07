
# Getting Started

In this module, we will:

1. Set up your dev environment
2. Create a basic web page
3. Link D3.js to your web-page
4. Link external CSS and JS files
5. Use `console.log` in a script
6. Explore the browser console

## Setting up Dev Environment

1. Download and install Chrome
2. Enable Chrome Developer Tools
3. Download the D3 library

## Create a basic webpage

```{html}

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>My D3 Visualization</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>

```
## Link D3 to your web page

Within your `head` tag and after your `title` tag, add the following line to your html:

`<script type='text/javascript' src='path/to/d3.js'></script>`

You should replace the text "path/to/d3.js" with the path to the library.

## Link an external CSS file and external JS file to your app

Within your `head` tag and after your `title` tag, add the following line to your html:

`<link rel='stylesheet' href='css/style.css'></script>`

Don't forget to create a file called style.css in that directory. OR just copy the `app` directory from within this repo. There is already a CSS file that will be helpful.

After your `body` tag and within the `html` tag, add the following line to your html:

`<script type='text/javascript' src='app.js'></script>`

Don't forget to create a file called app.js in that directory. OR just copy the `app` directory from within this repo. There is already a JS file that may be helpful.

## Using `console.log`

`console.log` is a very powerful debugging tool; you'll probably use it often to figure out what is going on in your program. This command is used to print data to the browser's console. Here is an example:

1. Open up Chrome
2. Access Chrome Dev Tools
3. Access the console tab
4. Type `console.log("Hello World!");` and `Enter`

"Hello World!" is printed to the screen

## Conclusion

Congrats! You're done with this module! Let's move on to the [next](../01_variables_datatypes/variables_datatypes.md)!

