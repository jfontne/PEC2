
//En aquest cas no es sequencial pq dins del setTimeOut te definida la funció async i s'executara en paral·lel a
//l'execució seqüencial


function getUser(list, { key, value }) {return list.find(element => element[key] === value);}  

function findOne(users, { key, value }) {
  setTimeout(async()=>{ 
  try {
    var quote = await getUser(users,{key,value});
    onSuccess(quote);
  } catch (error) {
    onError({msg: 'ERROR: Element Not Found'});
  }
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

//Aquesta funció callback passa com a paràmetres el següent:
//primer: la contant users on tenim les dades
//segon: la clau que estem buscant dins de l'array, en aquest cas nom: Carlos
//tercer: Aquí introduïm dues funcions
//  onSuccess: Serà cridada si trova la clau dins de l'array
//  onError: Serà cridada si no trova la clau dins l'array
//en aquest cas serà com a resultat onSuccess pq existeix el valor
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
