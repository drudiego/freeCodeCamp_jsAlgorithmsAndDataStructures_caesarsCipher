function rot13(str) {

    //First, create an object where the keys are the letters in the alphabet and the values are the equivalent letters using the ROT13 cipher.
    const table = {
      'A': 'N',
      'B': 'O',
      'C': 'P',
      'D': 'Q',
      'E': 'R',
      'F': 'S',
      'G': 'T',
      'H': 'U',
      'I': 'V',
      'J': 'W',
      'K': 'X',
      'L': 'Y',
      'M': 'Z',
      'N': 'A',
      'O': 'B',
      'P': 'C',
      'Q': 'D',
      'R': 'E',
      'S': 'F',
      'T': 'G',
      'U': 'H',
      'V': 'I',
      'W': 'J',
      'X': 'K',
      'Y': 'L',
      'Z': 'M'
    }
  
    //Then, get the string and split it into an array. Also, create a new empty array to receive the results
    const arr = str.split('')
    const result = []
  
    //Then, iterate through the characters in the array. If it is a letter, it finds the key in the object which corresponds to the letter and pushes the value (which is the ROT13 cipher letter) into the 'result' array. If it is not a letter (say, a whitespace or number), it pushes the same character into the 'result' array
    for (let letter of arr){
      if (table.hasOwnProperty(letter)){
        result.push(table[letter])
      } else {result.push(letter)}
    }
  
    //Lastly, it joins the characters in the result array and returns the expected output
    return result.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));