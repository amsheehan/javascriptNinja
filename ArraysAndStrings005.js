        function log(x) {
            console.log(x);
        }

        // This function replaces spaces in a string 
        // with %20. For example, 'A B' will become
        // A%20B.

        function replaceSpaces(string) {
            // Split string into array
            var arr = string.split("");

            // count number of spaces in 'arr'
            var spaceCount = 0;
            var i;
            var len = arr.length;
            for (i = 0; i < arr.length; i++) {
                if (arr[i] == ' ') {
                    spaceCount++;
                }
            }
            
            // if the array has 1 space, it will be replaced
            // by 3 characters '%20'. If array has 2 spaces
            // it will be replaced by 6 characters nad so on.
            // So, if an array has n spaces, the array's
            // length will increase by n times 2.

            var newLength = arr.length + (spaceCount * 2);
            arr.length = newLength;
            
            // scan array backwards
            for (i = len - 1; i > -1; i-- ) {
                if (arr[i] == ' ') {
                    // if a space is encountered insert '%20'
                    arr[newLength - 1] = '0';
                    arr[newLength - 2] = '2';
                    arr[newLength - 3] = '%';

                    newLength -= 3;
                }
                else {
                    // move character to end of array
                    arr[newLength - 1] = arr[i];
                    newLength--;
                }
            }
           
            log(arr.join(""));
        }

        replaceSpaces("A B C"); // A%20B%20C