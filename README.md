# Bulls and Cows Game - Ahmed Baha Ben Jmaa
This is a web application implementing the classical Bulls and Cows Game. The app is developed with React.js and deployed to Netlify using a CI/CD Github Actions workflow.

# CI/CD Workflow
Each push command triggers the Github Actions workflow. The javascript-based react code is firstly built into optimized static web files (html, css, javascript). The app is then tested by the unit-tests developed in javascript. Finally, if the tests are succeeded, the optimized built files are deployed to Netlify.

# Game Rules
The goal of the game is to find out a secret code composed of 5 colors.
You have 8 attempts. At each attempt, you will get the following feedback for your guess:
- a Bull: for each correct color placed in a correct position.
- a Cow: for each correct color placed in a wrong position.
