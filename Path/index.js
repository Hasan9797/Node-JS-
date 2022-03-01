const path = require("path");

// console.log(__filename); // C:\Users\Public\My-Codes\Node-JS-\index.js
//
// console.log(path.basename(__filename)); // index.js
//
// console.log(path.dirname(__filename)); // C:\Users\Public\My-Codes\Node-JS-
//
// console.log(path.extname(__filename)); // .js
//
// console.log(path.parse(__filename)); // {
//   root: 'C:\\',
//   dir: 'C:\\Users\\Public\\My-Codes\\Node-JS-',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

// console.log(path.join(__dirname, 'frontend', 'index.html')); // C:\Users\Public\My-Codes\Node-JS-\ +
// (frontend) folder and (index.html) file


console.log(path.resolve(__dirname, './frontend', '/index.html'));