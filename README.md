<h1 align="center">
    <a href="https://production-lambda-synaps-fe.herokuapp.com/">Synaps</a>
</h1>
<h3 align="center">Up you testing game with the best flash card app</h3>
<h3 align="center">Average testing score increase 20%.</h3>



<br/>
<br/>
<h1>
    Project Overview
</h1>

To create the best Life Science flashcard application, that has excellent UI, which has minimal distractions to make the learning process more efficient. To be the best user friendly flashcard application for life sciences students.


<h1>
    Key Features
</h1>


<h3 align="center"> Mobile First Design </h3>
<h3 align="center"> Share Decks With Friends </h3>
<h3 align="center"> Take Quizzes </h3>
<h3 align="center"> Spaced Repetition </h3>
<h3 align="center"> User Friendly Features </h3>

<br/>
<br/>
<br/>

   <h1 align="center">UI/UX</h1> 
   <div width="100%">
        <img src="https://avatars0.githubusercontent.com/u/48630065?s=460&v=4" width = "100" text-align="center" /> 
        <img src="https://avatars3.githubusercontent.com/u/49910197?v=4" width = "100" text-align="center" />
   </div>

(https://github.com/nataliepeterson)
(https://github.com/DKFerebee)

## Web Developers
[<img src="https://avatars3.githubusercontent.com/u/17443353?v=4" width = "100" />](https://github.com/jeremiahtenbrink)
[<img src="https://avatars1.githubusercontent.com/u/19153270?v=4" width = "100" />](https://github.com/ccurry20)
[<img src="https://avatars2.githubusercontent.com/u/20153709?v=4" width = "100" />](https://github.com/gmgower)
[<img src="https://avatars3.githubusercontent.com/u/47146701?v=4" width = "100" />](https://github.com/austinbro5)
[<img src="https://avatars0.githubusercontent.com/u/48000565?v=4" width = "100" />](https://github.com/Brimes7)
[<img src="https://avatars3.githubusercontent.com/u/49927848?v=4" width = "100" />](https://github.com/christopherc1331)

## Project Overview

To create the best Life Science flashcard application, that has excellent UI, which has minimal distractions to make the learning process more efficient. To be the best user friendly flashcard application for life sciences students.


## Tech Stack

![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


# React <br> Styled Components <br> Ant Design <br> Cloudinary(picture storage) <br> Redux <br> 
".

#### Front end deployed to https://production-lambda-synaps-fe.herokuapp.com/

#### [Back end](https://github.com/Lambda-School-Labs/pt-synaps-be) built using:Postgress

#### back end framework

    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "helmet": "^3.21.2",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.20.4",
    "knex-cleaner": "^1.3.0",
    "pg": "^7.17.0",
    "sqlite3": "^4.1.1"
    "devDependencies": {
    "cross-env": "^6.0.3",
    "jest": "^24.9.0",
    "nodemon": "^2.0.2",
    "supertest": "^4.0.2"

# APIs

## Authentication API here

OAuth - Google Library key. 

When you log in you can either login with your Google account connected to your gmail or you can create a new account with just the email and password.


#  Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:


    REACT_APP_apiKey= ""
    REACT_APP_authDomain=synaps-5ce5c.firebaseapp.com
    REACT_APP_databaseURL=https://synaps-5ce5c.firebaseio.com
    REACT_APP_projectId=synaps-5ce5c
    REACT_APP_storageBucket=synaps-5ce5c.appspot.com
    REACT_APP_messagingSenderId= ""
    REACT_APP_appId=1:""
    REACT_APP_ipinfoKey=""

    REACT_APP_BASE_URL=https://staging-lambda-synaps-be.herokuapp.com/

                            |

# Testing

- Supertest
- React Library
- Jest-DOM

#  Installation Instructions

FrontEnd
Npm install should install all dependencies
npx create-react-app

BackEnd
node install

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
synaps.lambda@gmail.com

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.
synaps.lambda@gmail.com

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/pt-synaps-be/blob/master/README.md) for details on the backend of our project.
