 // function to log output to console

    function log(x) {
        console.log(x);
    }
    // Prototypal Inheritance
    // Douglas Crockford's Inheritance Function

    function object(o) {
        function F() { }
        F.prototype = o;
        return new F();
    }

    var person = {
    name : "Sunil",
    friends : "Dogs"
    };

    var anotherPerson = object(person);
    anotherPerson.name = "Tara";
    anotherPerson.friends = "Cats";

    log(person.friends); // "Dogs"
    log(anotherPerson.friends); // "Cats"

    // Parasitic Inheritance
    // Closely related to prototypal inheritance is the concept of parasitic inheritance,
    // another pattern popularized by Crockford.

    function createAnother(o) {
    // clone the given object
        var clone = object(o);
        // add functions or properties to it
        clone.sayHi = function () {
            log("Hi From createAnother!");
        };
        return clone;
    }

    var thirdPerson = createAnother(person);
    thirdPerson.sayHi(); // "Hi From createAnother!"

    // Parasitic Combination Inheritance
    // It is the most efficient pattern for
    // reference types.

    function inheritPrototype(subType, superType) {
        var prototype = object(superType.prototype); // create an object
        prototype.constructor = subType; // set constructor
        subType.prototype = prototype; // assign object
    }

    function Employee(name) {
        this.name = name;
        this.traits = ["Hard Worker", "Pleasant", "Empathetic"];
    }

    function Programmer(name, skill) {
        Employee.call(this, name);
        this.skill = skill;
    }

    inheritPrototype(Programmer, Employee);

    Programmer.prototype.listAttributes = function () {
        log("Name : "+ this.name + " - Qualities : " + this.traits.toString());
    };

    var me = new Programmer("Sunil", "JavaScript");
    me.listAttributes(); // "Name : Sunil - Qualities : Hard Worker,Pleasant,Empathetic"
