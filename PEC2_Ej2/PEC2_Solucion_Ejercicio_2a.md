# Ejercicio 2 - apartado a
Observa que se han creado funciones handle en el fichero controlador (todo.controller.js), las cuales son pasadas como parámetro. Esto es debido al problema con el cambio de contexto (this) que existe en JavaScript. Ahora mismo si no tienes muy claro que está sucediendo, revisa qué hacen las “fat-arrow” de ES6 sobre
el objeto this, y prueba a cambiar el código para comprender qué está sucediendo cuando se modifica la siguiente línea:

## ¿Por qué es el valor de this es undefined en el segundo caso?

* **this.view.bindAddTodo(this.handleAddTodo);**
  * la funció handleAddTodo és del tipus 'arrow', al ser d'aquest tipus continuem dins de l'entor d'execució de la classe 'controller', i 'this' continuarà formant com a referència de la classe.


Por esta:

* **this.view.bindAddTodo(this.service.addTodo);**
  * En aquest cas fem referència a una funció que no és 'arrow', al fer-ho this farà referencia a la classe global 'window' i per aquest motiu ens dona com a resultat 'undefined'. 
     