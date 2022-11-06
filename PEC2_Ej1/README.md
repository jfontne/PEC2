# PEC2 Front-end UOC
## Datos Alumno
* jfontne
* Jordi Font Nebot

# Ejercicio 1: Evolución de la asincronia
- En este ejercicio tenemos los ejemplos según revisiones

1. En el primer ejemplo utilizamos **callbacks**

~~~
const findOne = (list, { key, value }, { onSuccess, onError }) => {

  //setTimeout es una funció asíncrona que espera uns milisegons a executar una funció
  //el codi seqüencial seguirà executant-se mentres espera una resposta de la funció list.find
  //setTimeout(function(){}, milisegons)
  setTimeout(() => {
    const element = list.find(element => element[key] === value);
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

//funció resposta afirmativa
const onSuccess = ({ name }) => console.log(`user: ${name}`);

//funció resposta negativa
const onError = ({ msg }) => console.log(msg);
~~~

En este ejemplo pasamos las funciones (callbacks) como parámetros y serán llamadas según el resultado de la constante 'element'

2. En el segundo caso la sintaxi se simplifica para ejecutar una acción asincrona, no hace falta passar las funciones como parámetros.

~~~
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
~~~

3. Seguimos con la evolución con la definición de las funciones async

~~~
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
~~~