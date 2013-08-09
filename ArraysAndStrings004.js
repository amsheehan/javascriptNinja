    // function to log to the console
        function log(x) {
            console.log(x);
        }

        // Function checks if two strings are anagrams of each other. 
        // Two strings are anagrams if they are written using the same exact letters, 
        // ignoring space, punctuation and case
        // Eg, "Eleven plus two" and "Twelve plus one"

        function isAnagram(string1, string2) {
        // convert to lowercase
            string1 = string1.toLowerCase();
            string2 = string2.toLowerCase();

            // match all alphanumeric characters in both strings
            // and return arrays of alphanumeric characters
            var myRegex = /\w/g;
            var string1Array = string1.match(myRegex);
            var string2Array = string2.match(myRegex);
            //sort the two arrays
            string1Array = string1Array.sort();
            string2Array = string2Array.sort();
            // check if arrays are equal
            if (string1Array.join("") == string2Array.join("")) {
                return true;
            }
            else {
                return false;
            }
        }

        log(isAnagram("eleven plus two", "twelve plus one")); //true

        // checks if two strings are anagrams without sorting
        // by checking if both strings have the same count for unique characters
        function isAnagramNoSort(stringS, stringT ) {
            // return false if lengths are unequal
        if(stringS.length != stringT.length){
            return false;
        }
        // hashTable like object
        var letters = {};
        var uniqueChars = 0;
        var completed = 0;
        var char;
        var i;
        // split strings into arrays
        stringSArray = stringS.split("");
        stringTArray = stringT.split("");

        for (i = 0; i < stringSArray.length; i++) {
             char = stringSArray[i];
            if (!letters[char]) {
                uniqueChars = uniqueChars + 1;
                letters[char] = 1;
            } else {
                letters[char]++;
            }
        }

        for (i = 0; i < stringTArray.length; i++ ) {
            char = stringTArray[i];
            // if char is not found in 'letters' return false
            if (!letters[char]) {
                return false;
            }
            letters[char]--;
            if(letters[char]==0){
                completed++;
            }
            if (completed == uniqueChars) {
                return (i == stringTArray.length - 1);
            }
        }
    }
    log(isAnagramNoSort("AAB", "BAA")); // true