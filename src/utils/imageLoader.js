// imageLoader.js

// Use webpack's require.context to dynamically import all images in the img folder
const images = require.context(
  "../../public/img",
  false,
  /\.(jpg|jpeg|png|gif|svg)$/
);

// Create an array of image file paths
const imagePaths = images.keys().map((path) => images(path));

export default imagePaths;
