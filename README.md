# product-viewer
Simple site that displays what products are used by what users and what users are using what products.

## Development
Have Docker installed along with docker-compose.  From the 
project root run:

```docker-compose up --build```

## Notes
1. Used docker compose to separate the frontend from the backend. 
2. Extended the express api with a /users route.
3. Users route makes use of a model (handles db queries) and controller (logic) to aggregate user data and return an array of items.
5.  Made use of [HAL](https://stateless.group/hal_specification.html) for better responses to make the (limited) api explorable.
6. Added a /users/:id route to get a single user
7. Initialized the UI using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
8. Used CSS modules along with sass to style in a modular extensible way.
9. Table display the user data and is responsive to sizing. (resize window < 580px)
10. Pagination in the get /users api request.

## Things I would do... 
In its current state the application is quite basic.  In hindsight, I would have used a ui/component framework to spend less time on styling and use that time to add features.  

These are the things I'd add/change to make it more useable and pleasing:

1. Break up the current sql query along with the data model so that I can display a minimal amount in the ui and give the user the option to display more (row expanding, modal, etc.).
2. Add additional routes for products, and update the the current routes to include any necessary verbs.
3.  Add places in the UI for CRUD operations if it made sense to this type of application.
4. Better error handling in the client and server.
5. Validation in the server.
6. API documentation.
7. Thorough comments throughout the codebase.
8. Unit testing using jest.
9. pagination on the client side.
10. Search functionality