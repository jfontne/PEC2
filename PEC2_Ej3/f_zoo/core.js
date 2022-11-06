const { Console } = require("console");
const { prices } = require("./data");
const { hours } = require("./data");
const { animals } = require("./data");
const { employees } = require("./data");

function entryCalculator(entrants) {

  let res;

  if(typeof(entrants) === 'undefined') {
    res = 0;
  } else if(Object.keys(entrants).length === 0){
      res = 0;
  } else {
      res= prices.Senior * entrants.Senior + prices.Child * entrants.Child + prices.Adult * entrants.Adult;
    }
  
  return res;
  // your code here
}


function schedule(dayName) {
   let res;
   var horari = {};

   Object.entries(hours).forEach(([key, value]) => {
  
    let AMPMini = value.open > 12 ? 'pm' : 'am';
    let AMPMfi = value.close > 12 ? 'pm' : 'am';  
    let horaINI = value.open > 12 ? value.open - 12 : value.open;
    let horaFI = value.close > 12 ? value.close - 12 : value.close;
    let frase = value.open === 0 && value.close === 0 ? 'CLOSED' : `Open from ${horaINI}${AMPMini} until ${horaFI}${AMPMfi}`
    horari[key] = frase;
  });
  

  if(typeof(dayName) === 'undefined') {
    res = horari;
  } else if(Object.keys(dayName).length === 0){
      res = horari;
  } else {
      res = {[dayName]: horari[dayName]}; 
    }
  
  return res;
  // your code here // your code here
}

function animalCount(species) {
  let res;
  var numAnimals = {};

  Object.entries(animals).forEach(([key, value]) => {
  
    let num = value.residents.length;
    numAnimals[value.name] = num;
  });


  if(typeof(species) === 'undefined') {
    res = numAnimals;
  } else if(Object.keys(species).length === 0){
    res = numAnimals;
  } else {
      res = numAnimals[species]; 
    }
  
  return res;
}


function animalMap(options) {
  let res;
  var zones = [];
  var llistaAnimals = {};
  var especiesZona = [];
  var zonesEspeciesNomsAnimals= {};
  var especiesNomsAnimals = [];
  var nomsAnimalsZona = {};
  var nomsAnimalsFamella = {};
  var arrayAnimalsFamella = [];
  var zonesEspeciesNomsAnimalsFamella = {};
  var especiesNomsAnimalsFamella = [];

  //Guardem les zones, sense repeticions
    Object.entries(animals).forEach(([key, value]) => {
    if(zones.length === 0){
      zones.push(value.location);
    } else if(!zones.some(e => e===value.location)){
        zones.push(value.location);
    }
  });
  //Comencem el bucle per anar guardant noms per zones
  zones.forEach(zona => {
    
    Object.entries(animals).forEach(([key, value]) => {
      if(value.location === zona){
        especiesZona.push(value.name);
        if(typeof(options)!=='undefined' && options['includeNames']) {
          nomsAnimalsZona[value.name] = value.residents.map((e, index) => e = value.residents[index].name);
        }
        if(typeof(options)!=='undefined' && typeof(options['sex']) !== 'undefined'){ 
          arrayAnimalsFamella = value.residents.filter(e => e.sex === options['sex']);
          nomsAnimalsFamella[value.name] = arrayAnimalsFamella.map((e, index) => e = arrayAnimalsFamella[index].name);
        }
          especiesNomsAnimals.push(nomsAnimalsZona);
          especiesNomsAnimalsFamella.push(nomsAnimalsFamella);
          nomsAnimalsZona = {};
          nomsAnimalsFamella = {};
        }
    });
    zonesEspeciesNomsAnimals[zona]= especiesNomsAnimals;
   
    zonesEspeciesNomsAnimalsFamella[zona] = especiesNomsAnimalsFamella;
    

    llistaAnimals[zona] = especiesZona;
    especiesZona = [];
    especiesNomsAnimals = [];
    especiesNomsAnimalsFamella = [];
    nomsAnimalsFamella ={};
  });

  

  if(typeof(options) === 'undefined') {
    res = llistaAnimals;
  } else if(Object.keys(options).length === 0){
    res = llistaAnimals;
  } else if(options['includeNames']) {
        if(typeof(options['sex'])==='undefined'){  
          res = zonesEspeciesNomsAnimals;}
        else{
          res = zonesEspeciesNomsAnimalsFamella;
        }       
        
  }  
  return res;
}


function animalPopularity(rating) {
  var popularity = [];
  var popEspecies=[];
  var popularityTable = {};

   //Guardem les zones, sense repeticions
   Object.entries(animals).forEach(([key, value]) => {
    if(popularity.length === 0){
      popularity.push(value.popularity);
    } else if(!popularity.some(e => e===value.popularity)){
        popularity.push(value.popularity);
    }
  });
  
  popularity.sort();

  popularity.forEach(popu => {

    Object.entries(animals).forEach(([key, value]) => {
        if (popu===value.popularity) {
            popEspecies.push(value.name);
        }
    });
    popularityTable[popu]=popEspecies;
    popEspecies = [];
  });


  if(typeof(rating) === 'undefined') {
    res = popularityTable;
  } else {res = popularityTable[rating]; 
    }
  return res;
}
 
//--------------------------------

function animalsByIds(ids) {

  
  if(typeof(ids) === 'undefined') {
    res = [];  
  } else if (typeof(ids) === 'object'){
    let animalet = {};
    let dadesAninals = [];
    ids.forEach(element => {
      Object.entries(animals).forEach(([key, value]) => {
        if(value.id === element){
          animalet.id=value.id;
          animalet.name=value.name;
          animalet.popularity=value.popularity;
          animalet.location=value.location;
          animalet.residents=value.residents;
        }
      });
      dadesAninals.push(animalet);
      animalet = {};
    });

    res = dadesAninals;

    } else if(typeof(ids)==='string') {

        let animalet = {};
        let dadesAninals = [];
        
    
          element = ids;        
          Object.entries(animals).forEach(([key, value]) => {
            if(value.id === element){
              animalet.id=value.id;
              animalet.name=value.name;
              animalet.popularity=value.popularity;
              animalet.location=value.location;
              animalet.residents=value.residents;
            }
          });
          dadesAninals.push(animalet);
          res = dadesAninals;
    
        }
  
return res;
  
}

function animalByName(animalName) {
  if(typeof(animalName) === 'undefined'){
    res = {};
  }else if(typeof(animalName)==='string') {

    let animalet = [];
    let dadesAnimal = {};
    

      element = animalName;        
      Object.entries(animals).forEach(([key, value]) => {
          animalet=value.residents;
          animalet.forEach(animal=>{
              if (animal.name === animalName){
                dadesAnimal.name = animal.name;
                dadesAnimal.sex = animal.sex;
                dadesAnimal.age = animal.age;
                dadesAnimal.species = value.name;
              }
          }); 
      });
    
  res = dadesAnimal;

  }

return res;
}

function employeesByIds(ids) {
  
  if(typeof(ids) === 'undefined') {
    res = [];  
  } else if (typeof(ids) === 'object'){
    let persona = {};
    let dadesPersona = [];
    

    ids.forEach(element => {
      Object.entries(employees).forEach(([key, value]) => {
        if(value.id === element){
          persona.id=value.id;
          persona.firstName=value.firstName;
          persona.lastName=value.lastName;
          persona.managers=value.managers;
          persona.responsibleFor=value.responsibleFor;
        }
      });
      dadesPersona.push(persona);
      persona = {};
    });

    res = dadesPersona;

    } else if(typeof(ids)==='string') {

        let persona = {};
        let dadesPersona = [];
        
    
          element = ids;        
          Object.entries(employees).forEach(([key, value]) => {
            if(value.id === element){
              persona.id=value.id;
              persona.firstName=value.firstName;
              persona.lastName=value.lastName;
              persona.managers=value.managers;
              persona.responsibleFor=value.responsibleFor;
            }
          });
          dadesPersona.push(persona);
          res = dadesPersona;
    
        }
  
return res; 
}

function employeeByName(employeeName) {
  if(typeof(employeeName) === 'undefined'){
    res = {};
  }else if(typeof(employeeName)==='string') {

    let persona = {};
    element = employeeName;
    Object.entries(employees).forEach(([key, value]) => {
      if(value.firstName === element || value.lastName == element){
        persona.id=value.id;
        persona.firstName=value.firstName;
        persona.lastName=value.lastName;
        persona.managers=value.managers;
        persona.responsibleFor=value.responsibleFor;
      }
    });
    res = persona;
  }
return res;
}

function managersForEmployee(idOrName) {
  
  if(typeof(idOrName) === 'undefined') {
    res = [];  
  }  else if(typeof(idOrName)==='string') {

        var persona = {};
        var arrayManagers = [];
    
          element = idOrName;        
          Object.entries(employees).forEach(([key, value]) => {
            if(value.id === element || value.firstName === element || value.lastName === element){
              persona.id=value.id;
              persona.firstName=value.firstName;
              persona.lastName=value.lastName;
              
              Object.entries(employees).forEach(([key, valueM]) => {
                  value.managers.forEach(manager => {
                    if(valueM.id === manager){
                      arrayManagers.push(valueM.firstName + ' ' + valueM.lastName);
                    }
                  });
              }); 
              
              persona.managers = arrayManagers;
              persona.responsibleFor=value.responsibleFor;
            }
          });
          res = persona;
    
        }
  
return res; 

  // your code here
}



/* 
 responsablesNoms = employees.map(x => x.firstName + ' ' + x.lastName);
 arrayAnimals = employees.map(e => animals.filter(x => e.responsibleFor.some(y => y === x.id)));
 arraySpeciesAnimals = arrayAnimals.map((x) => x.map(x=>x.name)); 
 res = responsablesNoms.map((x,index,arr)=>{

  return {[x]: arraySpeciesAnimals[index]};  
});
//console.log(res);
//return res;
*/

function employeeCoverage(idOrName) {
  
  var responsables = {};
  var responsable = [];
  var arrayAnimals = [];
 element = idOrName; 
 Object.entries(employees).forEach(([key, value]) => {
  if(typeof(idOrName) === 'undefined' || value.id === element || value.firstName === element || value.lastName === element){
        arrayAnimals = animals.filter(e => {
          let res = false;
          value.responsibleFor.forEach(responsable => {
           if(responsable === e.id){ 
              res = true; 
             }
        });
        return res;
      });
      responsables[value.firstName + ' ' + value.lastName] = arrayAnimals.map((e,index)=>e=arrayAnimals[index].name);
    }
  });
  console.log(responsables);
  return responsables;
  
  }
    
module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
