/***********
 * call back Function
 */

//Normal way
//  function callBack(name) {
//   print(name);
//   print("Ekta Abul");
// }
// function print(newName) {
//   console.log(newName);
// }

// callBack("Nabil");

//call back function
// function callback(name, print) {
//   print(name);
// }

// callback("Sazzad", function (name) {
//   console.log("Hello " + name);
// });

// callback("Sazzad", function (name) {
//   console.log("Length of  " + name + " is: " + name.length);
// });

//new problem
// var members = {
//   name: "Sazzad",
//   age: 16,
//   email: "sazzad@gmail.com",
// };

// function memberCall(name, callBack) {
//   // console.log(`Person: ${members.name} (${members.age})`);
//   if (name.age >= 18) {
//     callBack(name.email);
//   } else {
//     console.log("Your Age is not valid to reach our website.");
//   }
// }
// memberCall(members, function (email) {
//   console.log(`Email send to: ${email}`);
// });

//two argument call Back

function print(data, callback1, callback2) {
  console.log(`Orginal data: ${data}`);
  callback1(data);
  callback2(data);
}

print(
  "Ahmed Sazzad is Awesome!",
  function (data) {
    console.log(`In UPPERCASE: ${data.toUpperCase()}`);
  },
  function (data) {
    console.log(`In lowercase: ${data.toLowerCase()}`);
    console.log(`Data Length: ${data.length}`);
  }
);
