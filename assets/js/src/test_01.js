let person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function() {
        document.write(this.name);
    }
};

const test = true;
console.log(test);

person.displayName(); // Prints: Peter
document.write("<br />");
person["displayName"](); // Prints: Peter