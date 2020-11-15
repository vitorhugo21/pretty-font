# Small project with with Redux and Docker

Pretty font is a small app, where the user writes some text in a textarea input, and the same text is shown in a different font in a card component, using redux.

#### Tools used:

* React
* React Redux
* React Bootstrap
* Typescript

#### To start the app with npm:

* npm install
* npm start

#### To start the app with docker:

* docker-compose up
or
* docker build -t pretty-font-image .
* docker run -p 3000:3000 -d -v /app/node_modules -it --rm --name pretty-font-container pretty-font-image

#### Pretty font:

![Image of the App](https://i.imgur.com/0PDA0Ce.png)
