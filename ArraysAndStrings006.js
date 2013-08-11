        function log(x) {
            console.log(x);
        }

        // Given two strings, s1 and s2, write code to check if 
        // s2 is a rotation of s1 using only one call to contains()
        // (i.e., “waterbottle” is a rotation of “erbottlewat”).

        function checkRotation(s1, s2) {
            // Check if length(s1) == length(s2). 
            // If not, return false.
            if(s1.length != s2.length){
                return false;
            }
            // Concatenate s1 with itself and see whether s2 is substring of the result.
            var s1s1 = s1 + s1;
            if (s1s1.contains(s2)) {
                return true;
            }
        }

        log(checkRotation("erbottlewat", "waterbottle")); // true