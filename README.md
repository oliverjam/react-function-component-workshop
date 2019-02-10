# React Function Components

You're going to practice splitting a UI up into function components that pass the data they need around via props.

Here's the end-goal:

![End-goal](https://user-images.githubusercontent.com/9408641/52533193-1b365c80-2d28-11e9-9d63-8dd93e43f6d7.png)

## Getting started

1. Clone this repo
1. `npm i`
1. `npm run dev` to start the development server

The page should look pretty bare:

![End-goal](https://user-images.githubusercontent.com/9408641/52533191-183b6c00-2d28-11e9-92de-a2cbfddc48a3.png)

There are several components in the `workshop/components/` directory that you need to fill out to recreate the UI.

Start in `workshop/index.js` and you'll see the top-level component. It's being passed some mock data that you should see logged in the console.

You need to:

1. Fill out the child components so they actually render HTML
1. Pass the right data down to each from the top-level as props

## Stretch goal

Try to recreate the add-to-cart functionality seen here:

![With state](https://user-images.githubusercontent.com/9408641/52533197-212c3d80-2d28-11e9-849d-2f1a0a4a415e.gif)

You'll need to create some state, so get ready to refactor a function component to a class. Remember [lifting state up](https://reactjs.org/docs/lifting-state-up.html)
