# The App

This app is a simple React app for querying the capital of any U.S. state.

# Install and Run

After unzipping the project, go to the folder:
```
$ cd state-capitals
```

Make sure you have yarn installed, then run it:
```
$ npm install -g yarn
$ yarn
$ yarn start
```

# What it does

Starts a server at http://localhost:8080 running the state-capitals React app.

# How to use it

Type in the name of any U.S. state into the input and press the 'Get Capital' button (or press Enter) to display its capital. Invalid entries are handled gracefully.

You can enter state names like "NEW YORK", "georgia", "CAliFoRNia", "Washington". Try it out!

# Background

Not having any prior experience using React, I spent a day reading up on how to get a basic app up and running, from the docs and examples.  I organized the code to showcase the different things I learned: importing components, using require, webpage layout, jsx, conditional rendering, etc.

I came up with the example to query for a state capital to show how to handle user input, properly validate it, and display an expected result.

I learned a lot in setting this up and getting it working.  Futher developments I would do:
-Use some kind of API (like MediaWiki) to query a state capital so that my database isn't hardcoded
-Better seperate the CSS styling used by the App component
-Keep track of the user's query in a better object-oriented way. Right now, it's basically just a saved state on the App component
-Better manage the states that trigger the invalid states
