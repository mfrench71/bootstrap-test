var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function() {
        document.write(this.name);
    }
};

person.displayName(); // Prints: Peter
document.write("<br />");
person["displayName"](); // Prints: Peter