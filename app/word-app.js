/*
Write a function called *words* that takes in a string
argument and counts the occurrences of each word in the string.
The function should return a JSON object showing the words
identified, and their occurrences.
For example for the input `olly olly in come free`,
the output should be
>olly: 2
>in: 1
>come: 1
>free: 1
*/

function words(inputword) {
  var input_word = inputword.replace(/\r\n\t/, " ");
  const space_count = input_word.split(" ");
  const word_count = {};
  var i = 0;

  while (i < space_count.length) {

    if (word_count[space_count[i]] === undefined) {
      word_count[space_count[i]] = 1;

    } else {
      word_count[space_count[i]] ++;
    } 
    i++;

  } return word_count;
}

exports.words = words;

