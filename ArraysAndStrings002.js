/*
The function below deletes given characters from a string.
Any character in the string 'characters' will be
removed from the 'text' string. 
Method:
Create an array 'boolArray' whose index will be the characters from
the 'character' string and the value of each element in
the array will be true.
Create another array of characters from the input 'text'
string called 'inputText'.
Scan this new array 'inputText' to see if each character exists in the
old array 'boolarray', if not push the character to a new 'result' array.
*/
    function removeCharacters(text, characters) {
        var i;
        var boolArray = [];
        var remove = characters.split("");
        for (i = 0; i < remove.length; i++) {
            // Populate boolArray with characters that are to be removed
            // for example boolArray[a] = true;
            boolArray[remove[i]] = true;
        }

        var result = [];
        // convert input string into an array of its characters
        var inputText = text.split("");
        for (i = 0; i < inputText.length; i++) {
        // test if a character from the input string belongs to boolArray
            if (!boolArray[inputText[i]])  {
        // if not push it to the 'result' array
            result.push(inputText[i]);
        }
    }
    // convert result array to a string and return it
    return result.join("");
    }

    console.log(removeCharacters("Born To Lose, Live To Win", "aeiou"));
    // Output
    // Brn T Ls, Lv T Wn