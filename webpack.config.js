const path = require('path');

module.exports = {
  entry: './index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js', // Bundled file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Set mode to 'development' or 'production'
};