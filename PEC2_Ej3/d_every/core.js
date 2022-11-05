// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(n => n%2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((c, index, array) => typeof(c) === typeof(array[0]));
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(c => c.every(cc => cc > 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
    return input.every(e => {

      const vocals = 'aeiou';
      let arrayVocals = [];

      for (let i = 0; i < e.length; i++) {
        if (vocals.includes(e.charAt(i))) {
            arrayVocals.push(e.charAt(i));
        }
      }
      return arrayVocals.every((v,index,cadena) => v === cadena[0]);
    });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
