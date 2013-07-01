// Both these functions reverse the words in a string for example,
// "I am ready" will become "ready am I"

// The Easy Way
function reverseWords(text) {
    var textArray = text.split(" ");
    // Reverse that array
    textArray.reverse();
    // Convert the reversed array to string 
    return textArray.join(" ");
}
/*
It helps to visualize how the function is going
to work on a string. We will use the following string:
"I AM"
||||
||||
0123 
|
|
position variable is set to the end of the string at 3
it will be manipulated throughout the function

*/
function anotherReverseWords(text) {
    // create a variable to track the position of characters
    // this variable 'position' will be manipulated throughout
    // the function
    var position = text.length - 1
    var result = [];
    while (position >= 0) {
        if (text[position] == ' ') {
            // insert space into 'result' array
            result.push(text[position]);
            // bring position to the end of a word
            position = position - 1;
        }
        else {
            // while character at position is not a space bring
            // position to the begining of a word
            var insertWordEndPosition = position;
            while (position >= 0 && text[position] != " ") {
                //bring position to the begining of a word
                position = position - 1;
            }
            var insertWordBeginPosition = position + 1;
            while (insertWordBeginPosition <= insertWordEndPosition) {
                //insert the word character by character into the 'result' array
                result.push(text[insertWordBeginPosition]);
                insertWordBeginPosition++;
            }
        }
    }
    return result.join("");
}

console.log(reverseWords("Afraid are You")); // You are Afraid
console.log(anotherReverseWords("Tested he will Be")); // Be will he Tested