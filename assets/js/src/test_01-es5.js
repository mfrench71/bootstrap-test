"use strict";

var person = {
  name: "Peter",
  age: 28,
  gender: "Male",
  displayName: function displayName() {
    document.write(this.name);
  }
};
var test = true;
console.log(test);
person.displayName(); // Prints: Peter

document.write("<br />");
person["displayName"](); // Prints: Peter
