/*
Write a function *reverseString* that takes in a string
argument and returns the reverse of the string provided.
If the reverse of the string is the same as the original
string, as in the case of palindromes, return true instead.
*/

function reverseString(input) {
	//var split_input = input.split("")
	switch (input) {
		case (testPalindromes(input) === 1): return_val = true;
		break;

		case " ": return_val = null;
		break;

		default: {
			return_val = revWords(input);
		}

	} return return_val;
}

function revWords(str){
    return str.split("").reverse().join("");
}

function testPalindromes(word) {
	if (revWords(word) === word) {
		return 1;
	}

}

exports.reverseString = reverseString;