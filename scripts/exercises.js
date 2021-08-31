(function () {
  'use strict';

  //// WRITE FUNCTION DESCRIPTION, PARAMETER DESCRIPTION, RETURN DESCRIPTION

  //EXAMPLE:
  //CALCULATE THE SQUARE OF A NUMBER (FUNCTION DESCRIPTION)
  //NUM IS A NUMBER TO SQUARE (PARAMETER DESCRIPTION)
  //RETURNS THE SQUARE  (RETURN DESCRIPTION)


  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  function maxOfThree(num1, num2, num3) {
    return num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3;
  }

    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------
      function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u', " "].includes(char) ? true : false;
      }

    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------

    function rovarspraket(str) {
      let newWord =[];
      let vowels = ['a', 'e', 'i', 'o', 'u', ' '];
      for(let i = 0; i < str.length; i++) {
          if (vowels.includes(str[i])) {
              newWord.push(str[i]);
          } else {

              newWord.push(str[i], "o", str[i])
          }
      }
      return newWord.join("");
    }

    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------

      function sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
      }

      function multiply(arr) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
          product *= arr[i];
        }
        return product;
      }

    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------
    
      function reverse(str) {
        const newStr = [];
        for (let i = 0; i < str.length; i++) {
          newStr.unshift(str[i]);
        }
        return newStr.join("");
      }

    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------



    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------



    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------


    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////

    console.assert(max(2, 4) === 4, 'function max error');

    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

    console.assert(isVowel('a') === true, 'ERROR function isVowel');

    console.assert(isVowel('b') == false, 'ERROR function isVowel');

    console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

    console.assert(findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

    console.assert(filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  }) ();
