/***
 * Class type object
 */

// function info(name, email) {
//   this.name = name;
//   this.email = email;
//   this.print = function (i) {
//     console.log(`Email ${i + 1}: ${this.email}`);
//   };
// }

// var obj1 = new info("Touhidul Islam", "touhidul@gmail.com");
// var obj2 = new info("Monir hossain", "monir@gmail.com");
// var obj3 = new info("Ahmed Sazzad", "as@gmail.com");

// var people = [obj1, obj2, obj3];
// people.forEach((element, index) => {
//   element.print(index);
// });

// for (var props in obj1) {
//   console.log("Properties: " + props);
// }

//........................new object..............

function book(name, author, price) {
  this.name = name;
  this.tuthor = author;
  this.price = price;
}
var book = new book("Functional Javascript", "Macbael fogus", 30);

console.log(book.constructor);
