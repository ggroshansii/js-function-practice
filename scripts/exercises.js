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

  //Finds the largest number between the two arguments
  //num1 and num2 parameters represent the two argument integers that will be compared
  //Retuns the largest number of the two arguments
  function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  //Finds the largest number among the three integer arguments given
  //num1, num2, and num3 parameters represent the three argument integers that will be compared
  //Returns the largest number of the three arguments
  function maxOfThree(num1, num2, num3) {
    return num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3;
  }

    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------
      
    //Finds whether the character argument is a vowel or not
    //char parameter is the argument that will be test to see if char is vowel
    //Returns a true if the character is a vowel and false if the characater is not a vowel
    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u', " "].includes(char) ? true : false;
      }

    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------

    //Looks to see if the current character is a consonant, if so, then the current character is doubled and an 'o' is added between them.
    //str parameter represents the argument string that will be checked to see if it is a consonant
    //Return a joined array of the updated word 
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

    //These functions will iterate through an array, apply their corresponding math operator, then update the sum/product variable
    //arr parameter represents the argument array of numbers given that will be iterated through
    //Return the updated sum/product variable 
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
    
      //Iterates through the string then adds the string to the beginning of an array so the result will be a reversed string after joining
      //str parameter represents the argument string that will be iterated through
      //Returns the new string by joining the array that was built using unshift()

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

      //Iterates through the array given to find the length of the longest word in the array
      //arr parameter represents the array argument that will be iterated and compared to previous lengths. If the current word length is higher, then the longestWord variable will be updated.
      //Returns the length of the finalized longestWord variable to produce the length of the longest word in the array
      function findLongestWord(arr) {
        let longestWord = "";
        for (let i = 0; i < arr.length; i++) {
          if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
          }
        }
        return longestWord.length;
      }


    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------

      //Iterates through an array to see if the current iterative value is longer than the second parameter given, i.
      //arr parameter is the array argument given to iterate and compare and i parameter is the integer argument that will be used to compare with the current length value.
      //Return the array of words that are longer in length than the given integer argument.
      function filterLongWords(arr, lenInt) {
        const filteredWords = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length > lenInt) {
            filteredWords.push(arr[i]);
          }
        }
        return filteredWords;
      }


    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------

      //Iterates through a string to see if the current character is within the freqObj object, if it is not then add and give a value of 1; if so, then add it's value by 1;
      //str parameter is the string argument given to be iterated upon
      //Return the final obj to get the frequency distribution of characters in the given string argument. 
      function charFreq(str) {
        const freqObj = {};
        for (let i = 0; i < str.length; i++) {
          if (freqObj[str[i]] === undefined) {
            freqObj[str[i]] = 1;
          } else {
            freqObj[str[i]] += 1;
          }
        }
        return freqObj;
      }


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
