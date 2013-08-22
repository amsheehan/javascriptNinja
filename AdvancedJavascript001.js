// Function Binding
        // A 'bind()' function is used to bind a context to a function.

        function bind(fn, context) {
            return function () {
                return fn.apply(context, arguments);
            };
        }

        var dog = {
        sayHi : "WOOF"
        };

        var cat = {
        sayHi : "MEOW"
        }

        var sayHi = "Hey There!";

        function greeting() {
            return this.sayHi;
        }

        console.log(greeting()); // "Hey There!"

        console.log(bind(greeting, dog)()); // "WOOF"

        console.log(bind(greeting, cat)()); // "MEOW"


        // Function Currying
        // Function Currying involves pre-setting some arguments within
        // a function.

        function curry(fn) {
        // arguments of the outer function
            var args = Array.prototype.slice.call(arguments, 1);
            return function () {
                // arguments of the inner function 'innerArgs'
                // are combined with 'args' to produce 'finalArgs'
                // the function 'fn' is then applied to 'finalArgs'

                var innerArgs = Array.prototype.slice.call(arguments),
                    finalArgs = args.concat(innerArgs); 
                return fn.apply(null, finalArgs);
            };
        }

        function add(num1, num2) {
            return num1 + num2;
        }

        // 'The curriedAdd' function adds 7 to every number it is passed.

        var curriedAdd = curry(add, 7);

        console.log(curriedAdd(13)); // 20
        console.log(curriedAdd(33)); // 40

        // Currying can be used to create a complex bind function

        function curriedBind(fn, context) {
            var args = Array.prototype.slice.call(arguments, 2);
            
            return function () {
                var innerArgs = Array.prototype.slice.call(arguments),
                finalArgs = args.concat(innerArgs);
                // the function 'fn' is applied with the given context
                return fn.apply(context, finalArgs);
            };
        }

        function convert(ratio, input) {
        return (ratio * input).toFixed(2) + " " + this.unit;
        };

        var kilometers = {
        unit : "km"
        };

        var pounds = {
        unit : "lbs"
        };


        var milesToKms = curriedBind(convert, kilometers, 1.60);
        console.log(milesToKms(90)); // "144.00 km"
        console.log(milesToKms(85)); // "136.00 km"