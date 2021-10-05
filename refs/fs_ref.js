const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if (err) throw err;
//   console.log('folder created');
// });

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'second file', (err) => {
//   if (err) throw err;
//   console.log('file created');

//   fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), ' added content', (err) => {
//     if (err) throw err;
//     console.log('file edited');
//   });
// });

// fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'edited_notes.txt'),
  (err) => {
    if (err) throw err;
    console.log('file edited');
  },
);
