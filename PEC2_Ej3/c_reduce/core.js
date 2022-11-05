function sum(array) {
  // your code here
    res = array.reduce((vAnt, vAct) => vAnt + vAct);
    return res;
}

function productAll(array) {
  // your code here
    res = array.reduce(a => a.reduce((ar,br) => ar*br));
}
function objectify(array) {
  // your code here
}

function luckyNumbers(array) {
  // your code here
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
