function onlyEven(array) {
  const res = array.filter(element => element%2 === 0);
  return res;
  // your code here
}

function onlyOneWord(array) {
  // your code here
  const res = array.filter(element => !element.includes(' '));
  return res;
}

function positiveRowsOnly(array) {
  // your code here
  const res = array.filter(element => element.length === element.filter(element => element > 0).length);    
  return res;
}

function allSameVowels(array) {
    // your code here
      const res = array.filter(element => {
      const vocales='aeiou';
      let vocalsIgualsPrimeraPos = [];
      let arrayVocals = [];
      for(let i=0;i<element.length;i++){
        if (vocales.includes(element.charAt(i))) {
            arrayVocals.push(element.charAt(i));
        }
      }
      
      vocalsIgualsPrimeraPos = arrayVocals.filter((e,index,arr) => e === arr[0]);
      return vocalsIgualsPrimeraPos.length === arrayVocals.length;
      
    });
    
    
return res;
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
