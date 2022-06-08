# Ejercicio

Sigue las siguientes instrucciones

### Parte 1
- Crea un archivo js el cual debe llevar como nombres index.js
- Crea una función asincrona la cual debe contener 2 promesas. La primera debe llamarse paises y deberas regresa en esta promesa un arreglo de objetos como se muestra a continuación
```
[
    { id: 1, nombre: 'México' },
    { id: 2, nombre: 'Peru' },
    { id: 3, nombre: 'Colombia' },
  ]
```
- Para la segunda promesa, debe llamarse estados y deberas regresa en esta promesa un arreglo de objetos como se muesyta a continuación
```
[
      { id: 1, nombre: 'Aguascalientes', idPais: 1 },
      { id: 2, nombre: 'Baja california', idPais: 1 },
      { id: 3, nombre: 'Baja california sur', idPais: 1 },
      { id: 4, nombre: 'Campeche', idPais: 1 },
      { id: 5, nombre: 'Guainía', idPais: 3 },
      { id: 5, nombre: 'Huila', idPais: 3 },
]
```
-  Obtenido el resultado de ambas promesas, deberas filtrar todos los estados que pernezcan al pais México. El resultado debera ser un arreglo con el nombre de los estados en máyusculas. Muestrarlo en consola.

### Parte 2

- Crea un archivo que se llame nombres.json. Este archivo debe contener la siguiente información
```
{
  "nombres": [
    { "nombre": "Juan", "apellido": "Garcia1" },
    { "nombre": "Pedro", "apellido": "Lopez" },
    { "nombre": "Andres", "apellido": "Mendez" },
    { "nombre": "Daniel", "apellido": "Valdez" },
    { "nombre": "Luis", "apellido": "Gonzalez" }
  ]
}
```
- Por medio del método fetch, debes consumir el archivo nombres.json.
- Por ultimo, muestra el resultado en consola.

### Parte 3

Del ejercicio anterior, usa async y await para obtener la respuestas de la promesa

### Parte 4

- Del ejercicio anterior. Ahora crea un archivo index.html. Debes importar tu archivo index.js a tu sitio web
- Instala bootstrap en tu proyecto.
- Agrega un select como se muestra acontinuación
```
    <section>
      <select id="campos" class="form-select"></select>
    </section>
```
- Ahora bien, por medio de javascript debes agregar los nombres del archivo nombres.json a tu select 
