

function sum(array) {
  // your code here
    res = array.reduce((vAnt, vAct) => vAnt + vAct);
    return res;
}

function productAll(array) {
  // your code here
  res = array.map(x => x.reduce((vAnt,vAct)=>vAnt*vAct));
  resPro = res.reduce((vAnt,vAct)=>vAnt*vAct);
  return resPro;
  }
function objectify(array) {
    // your code here
    
    
    //var res = array.map(x => x.reduce((acu, value) => {
    //    acu[value]=value.;
    //    return acu;
    //  }, {}));
    //resPro = res.reduce((key, value)=>`${key}: ${value}`), {};
    res = array.reduce((acu, value) => {
          acu[value[0]]=value[1];
          return acu;
        }, {});
    return res;
}

function luckyNumbers(array) {
  // your code here
  res = array.reduce((acu, value, index, arr) => {
    let separador;
    if(index===0){
      separador=' ';
    } else if(index === arr.length - 1){
      separador = ', and ';
    }else{
      separador = ", ";
    }

    acu = acu + separador + value;
    return acu;
  }, 'Your lucky numbers are:');
  return res;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
