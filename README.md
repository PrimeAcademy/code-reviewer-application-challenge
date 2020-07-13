# React - Gallery of My Life

Before you get started make sure to look through the code that has been provided. Server side code to retrieve data (`GET`) and like a photo (`PUT`) have been provided for you. For practice, we recommend testing out these routes in Postman. You should not need to modify these routes for base mode.

### Setup

There is no database component to base mode. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

Between the server and client, you'll need two terminal tabs! Because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## BASE MODE

- Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.js`.
- Create a new **component** for the `GalleryList`.
- Create a new **component** called `GalleryItem.js` and pass it the individual gallery items via `props`. 
- Display all of the images on the screen.
- Swap the image with the description on click.
- Display the number likes for each item and include a like button.
- When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
- Update the gallery each time a like button is clicked.

### Wireframes

> NOTE: Images don't need to be 100px x 100px but it will be easier if the are all the same dimensions.

![mockup one](wireframes/first-mockup.png)

![mockup two](wireframes/second-mockup.png)
