const findOne = (list, { key, value }) => {
  
  //setTimeout espera n segons aturant l'execució del codi mentre la resta segueix executant-se
  //dins de setTimeout realitzem una promesa que començarà en paral·lel al l'espera de setTimeout 
  //el codi seqüencial seguirà executant-se mentres espera una resposta de la funció list.find
  //setTimeout(function(){}, milisegons)
  
    //console.log(list);
    setTimeout(() => {
    const element = list.find(element => element[key] === value);
    
    //Fem una promesa i preguntem si es satisfactiria(.then) o fallida (.cath)
    pro = new Promise(()=>element)
      .then(onSuccess(element))//codi a exercutar si la crida és satisfactòria
      .catch(onError({ msg: 'ERROR: Element Not Found' }));//codi a executar si la crida és fallida
    },2000);
}
//funció resposta afirmativa
const onSuccess = ({ name }) => console.log(`user: ${name}`);

//funció resposta negativa
const onError = ({ msg }) => console.log(msg);

//Clàssica variable array que conté dades en format json
//tenim parelles de dades "name" i "rol"
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

//d'entrada JS començarà de manera seqüencial, i el primer que troba és aquesta console.log i ho treurà per consola
console.log('findOne success');

findOne(users, { key: 'name', value: 'Carlos' });

//Treu per consola el missatge
console.log('findOne error');

//Tornem a buscar una altre clau, en aquest cas inexistent
findOne(users, { key: 'name', value: 'Fermin' });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
