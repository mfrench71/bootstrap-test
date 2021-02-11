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

const test1 = 768;
console.log(test1);

person.displayName(); // Prints: Peter
document.write("<br />");
person["displayName"](); // Prints: Peter