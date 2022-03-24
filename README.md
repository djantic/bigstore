# MERN stack eCommerce app [DEMO](https://bigstoreapp.herokuapp.com/)

## Info

* BigStore is my final project for ComeTrade CODE.
* It has been built from scratch using the MERN stack with the client side using a redux store as well. Bootstrap 5 is used along with some custom styling.
* The client side uses React hooks along with Redux.js and redux-thunk middleware.
* The server side is built using the express framework of node.js.
* The database used to store the users, orders, products is the free tier of the cloud based mongoDB service from MongoDB Atlas.
* The workflow for ordering the items is very simple and quick. The status tracker helps keep track of the number of steps left before placing the order.
* PayPal payment gateway is  implemented to provide payment option.

## Planned improvements and features
* The user authentication and authorisation with social accounts Google,Twitter,LinkedIn,Github.
* The [passport.js](http://www.passportjs.org/) and [nodemailer](https://nodemailer.com/about/) will be used for all that.
* Implementation of admin panel to keep track of all products, orders and users.
* Implementation of user reviews and tracking of previous orders in user panel.
* Addition of [Stripe](https://stripe.com/) as a secondary payment gateway.
* Cleaner UI with use of styled components rather than just boostrap classes.
* Fuzzy Search implementation.
* Adding products as favorites for repeated orders ,product categories and sorting feature.
* Adding GSAP/Framer for sleek animations!
* Live chat for communicating with customers.
* AWS S3 storage for user avatars and product images.
Any more suggestions are always welcome in the PRs!

## Technologies Used
* [MongoDB Atlas](https://www.mongodb.com/atlas/database) : It provides a free cloud service to store MongoDB collections.
* [Mongoose](https://mongoosejs.com/) : An ODM(Object Data Modelling)library for MongoDB and Node.js.
* [React.js](https://reactjs.org/) : A JavaScript library for building user interfaces.
* [Node.js](https://nodejs.org/en/) : A runtime environment to help build fast server applications using JS.
* [Express.js](https://expressjs.com/) : A popular Node.js framework to build scalable server-side for web applications.
* [Redux.js](https://redux.js.org/) : A predictable & global state container for React apps.
* [JSON Web Tokens or JWTs](https://jwt.io/) : A standard to securely authenticate HTTP requests.
* [Bootstrap 5](https://getbootstrap.com/) : A popular framework for building responsive, mobile-first sites.
* [React Bootstrap](https://react-bootstrap.github.io/) : The most popular front-end framework, rebuilt for React.
* [Heroku](heroku.com) : A platform(PaaS) to deploy full stack web applications for free.
