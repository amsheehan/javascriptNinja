function log(x) {
    console.log(x);
    }

    // This function converts a String to an
    // Integer without using the 'parseInt()'
    // function.

    function stringToInteger(myString) {
        var i = 0, isNegative = false, num = 0, len = myString.length;
        // check for a negative number
        if (myString[0] == '=') {
        // set flag for negative to true
            isNegative = true;
            i = 1;
        }

        while (i < len) {
        // multiply result 'num' by 10 to account for the digits place
            num = num * 10;
            // the character '0' when added to a number, example 7,
            // yields the character '7'. We use this concept for the conversion
            num = num + (myString[i] - '0');
            i++;
        }
        if (isNegative) {
            num = num * -1;
        }

        return num;
    }

    log(stringToInteger("2013")); // 2013

    // This function converts an Integer to a String without using toString()

    function integerToString(num) {
        var i = 0, isNegative = false, temp = [], result = "";
        if (num < 0) {
            isNegative = true;
        }
        do {
            // convert last digit to a character and push into array
            temp[i++] = (num % 10) + '';
           // work on the remaining digits
            num = Math.floor(num / 10);
        }
        while (num != 0)

        if (isNegative) {
            result += '-';
        }


        while (i > 0) {
        // build result string from 'temp' array
            result += temp[--i];
        }

        return result;
    }

   log(integerToString(123)); // "123"