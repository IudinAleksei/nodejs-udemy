const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Course {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = uuidv4();
  }

  toJSON() {
    return JSON.stringify({
      title: this.title,
      price: this.price,
      img: this.img,
      id: this.id,
    });
  }

  async save() {
    const courses = await Course.getAll();
    const newCourses = [...courses, this.toJSON()];
    console.log(newCourses);
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'courses.json'),
        JSON.stringify(newCourses),
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'courses.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(JSON.parse(content));
        }
      );
    });
  }
}

module.exports = Course;
