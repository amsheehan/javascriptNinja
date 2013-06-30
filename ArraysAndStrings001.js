
   /* Find the first nonrepeated character in a string.
    * For, example the first nonrepeated character in 'total' is 'o',
    * and the first nonrepeated character in 'teeter' is 'r'.
    * Create an empty object to be used like a hashtable. myHashTable = {};
    * Look at each character in the string.
    * Create a property, name of the property being the character. myHashTable[c]
    * The value of the property will be set to 'seenOnce' if the character does not
    * exist in the myHashTable, if it exists the value will be 'seenTwice'.
    * Scan the myHashTable object and return the first property which has the
    * value of "seenOnce' 
    */

    function firstNonRepeatedCharacter(text) {
        // Empty Object to be used like a HashTable
        var myHashTable = {};

        // Scan the input string
        var i;
        
        for (i = 0; i < text.length; i++) {
            // See if myHashTable contains a property whose
            // name corressponds to each character in the input string.

            if (myHashTable[text[i]]) {
            // Set the property to "seenTwice" if it exists, 
            // for example myHashTable[t] = "seenTwice";
                myHashTable[text[i]] = "seenTwice";
            }
            else {
            // Create a propert whose name corressponds to the 
            // letter in the input string
                myHashTable[text[i]] = "seenOnce";
            }
        }
        // Scan the hashtable for a property whose value is "seenOnce"
        // and return the property name
        for (i = 0; i < text.length; i++) {
            if (myHashTable[text[i]] == "seenOnce") {
                return text[i];
            }
        }
        // On failure
    return null;
}
console.log("First NonRepeated Character");
console.log(firstNonRepeatedCharacter("teeter")); // Output 'r'
console.log(firstNonRepeatedCharacter("aabbcddee")); // Output 'c'