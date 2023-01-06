# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Pacakages Installed in Front-end

- axios : to make HTTP requests from node.
- bootstrap : for styling purpose.
- react-redux : to read data from a Redux Store, and dispatch Actions to the Store to update data. 
- react-router-dom : to redirect from one page to another
- redux-thunk - to perform actions and perform function instead of actions.
- react-stripe-checkout: to create payment checkout.

## packages Installed in Back-end
- cors :  for providing a Express middleware that can be used to enable CORS with various options.
- dotenv : to load environment variables from a . env file into the process.
- express : to manage server and routes
- mongoose : to define schemas for data
- nodemon : to automatically restart the server everytime when changes made
- router - to create routes with different endspoints
- stripe : to provide convenient access to the Stripe API from code written in server-side JavaScript.
- uuid : to identify unique information regarding payment object.

<br>

# How to run the Project

- In the beginning Landing page is displaying which includes two links click on link user Registeration and you will redirect to the signup page.

-  Enter your details and signup aftrwards there is link to redirect to Log-in page right after signup button click on that link and redirect to Log-in page then
 
-  Enter your login details and refresh the page. After refreshing you will redirect to food Items list page where you can add food to the cart by using cart button also you can change the size and quantity of food item. 

- Click on the cart which placed at navigation bar and you will redirect to cart page where you can see the food items which are added to the cart. At the end there is payNow Button click on the button for payment checkout.

- After payment checkout click on the orders which is also placed at navigation bar to see your orders.




