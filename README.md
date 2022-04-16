# Service Starter Project

### Quickstart

```
  yarn install
  # or
  npm install
```

Then go to the [Running the server section](#running-the-server) 

## Instructions

1. Download this repository from github as a .zip folder
2. Extract it to your projects folder and rename `service-starter-project-main` (the extracted folder) to your project
3. Run `git init`
4. Run `yarn install` or `npm install`
5. Update `package.json` information
6. Create the `.env` file by copying the information from the `example.env` file and customizing it
    - __DO NOT EVER PUT REAL VARIABLES IN `example.env`__
7. Alter the `README.md` file with project relevant information
8. Run git commands to commit the "initial commit"
    - `git add .`
    - `git commit -m "initial commit"`
9. Create a new github repository and follow the instructions to add an existing repository
10. Setup of a new service is complete proceed to code

## Running the server
```
  # Open a terminal window
  yarn compile
  # or
  npm run compile

  # Open another terminal window
  yarn dev
  # or
  npm run dev
```

## Project Structure

This structure is a guideline for creating services that will integrate well with other custom backend functionality that we create at Everlast Brands. It is recommended that you follow the guideline unless you have a vastly different usecase in which case it may be even better to start a project from scratch or consult with the rest of the Dev team.

### NodeJS

NodeJs bring Javascript to the backend and improves our quality of life as developers by allowing us to use the same language on the frontend as on the backend. Javascript is not the solution to every problem other languages have strength that Javascript does not and in some cases would be better suited. Javascript however is the default base line language that we use.

### Typescript

Typescript is Javascript with some extra tools build on top of it (simlar to SCSS and CSS). These extra tools, while seemingly complex at first, are huge maintainability and stability boosters for Javascript. The best part is that you can write just Javascript and implement Typescript gradually.

### Express

Express is a flexible server side framework that is immensly popular. Express is well suited to quickly creating useful services. 

### Express Validator

Validates and sanitizes user input before it reaches our endpoints. By adding express validator rules to routes security and predictability increase.

### Jest

Jest is the testing framework in use. Paired with super test we can create endpoint end-to-end tests. Unit tests can also be created for standalone methods.

### Super Test

Super Test allows us to conduct integration tests accross our entire application infastructure. Super Test spins up our application server and calls our API endpoints against it.

### Pino Http

Pino is a nodejs logger that can be used to keep track of warnings and odd behavior in our system. Pino can also help us keep track of our application API performance by giving us the miliseconds it takes for requests to be processed and may also help us keep track of API activity by logging each time an endpoint is used.

### Json Web Token
Json Web Tokens are useful for anything requireing us to send unalterable authenticating messages accross the internet. They can contain a small amount of data and should always have encrypted body data.