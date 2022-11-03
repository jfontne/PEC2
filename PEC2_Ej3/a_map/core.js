function multiplyBy10(array) {
  // your code here
  const res = array.map(x => x * 10);
  return res;
}

function shiftRight(array) {
  const res = array.map((x, index, array) => array[(index - 1) < 0 ? array.length - 1  : (index -1)]);
  return res;
  // your code here
}

function onlyVowels(array) {
  // your code here
  const res = array.map((element) => {
      
      const expresion = new RegExp('[aeiouAEIOU]');
      let text;
      text = "";
      for(let i=0;i<=element.length;i++){
          if(expresion.test(element.charAt(i))){
              text = text + element.charAt(i);
          }
      }
      return text;
      
    });
  return res;
  }

function doubleMatrix(array) {
  // your code here
  const res = array.map((element) => {
    const arr = element.map(x => x * 2);
    return arr;
  });
  return res;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
