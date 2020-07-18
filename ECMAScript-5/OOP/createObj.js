/****
 * Basic idea of Object oriented js
 * create a object
 */
// var obj = {}
// var anotherObj = new Object;
// console.log(obj);
// console.log(anotherObj);

var book = {
  name: "Agile Artificial Intelligence in Pharo",
  des:
    "Implementing Neural Networks, Genetic Algorithms, and Neuroevolution 1st ed. Edition",
  author: "Alexandre Bergel",
  page: 250,
  print: function () {
    console.log(this.name + " By " + this.author);
  },
};

var obj = book.print();

//create properties outside

book["PublishYear"] = 2010;
book.price = "20$";
// console.log('Publish Year:' + book.PublishYear);
// console.log('price: ' + book.price);

for (var props in book) {
  console.log(props);
}
