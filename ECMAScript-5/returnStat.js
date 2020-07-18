/**********
 * Return Statement
 ***********/
//toLowerCase()
function toCaptitalize(name) {
  return name[0].toUpperCase() + name.substring(1);
}
function getMsg(fName, lName, gender) {
  gender = gender.toLowerCase();
  fName = toCaptitalize(fName);
  lName = toCaptitalize(lName);
  if (gender === "male") {
    return `Hi Mr. ${fName} ${lName} `;
  } else {
    return `Hi Mrs. ${fName} ${lName} `;
  }
}

function mySelf() {
  return {
    name: "Sazzad",
    skill: ["JS", "Python"],
    print: function () {
      console.log(`Hi ${this.name} \nYour Skills: ${this.skill}`);
    },
  };
}
// var result = getMsg("touhidul", "islam", "MaLe");
// console.log(result);

var obj = mySelf();
obj.print();
