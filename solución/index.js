// Parte1
const paises = new Promise((resolve, reject) => {
    const datos = [
        { id: 1, nombre: 'México' },
        { id: 2, nombre: 'Peru' },
        { id: 3, nombre: 'Colombia' },
      ];

    resolve(datos);
});

const estados = new Promise((resolve, reject) => {

    const datos = [
        { id: 1, nombre: 'Aguascalientes', idPais: 1 },
        { id: 2, nombre: 'Baja california', idPais: 1 },
        { id: 3, nombre: 'Baja california sur', idPais: 1 },
        { id: 4, nombre: 'Campeche', idPais: 1 },
        { id: 5, nombre: 'Guainía', idPais: 3 },
        { id: 5, nombre: 'Huila', idPais: 3 },
  ];
    
    resolve(datos);
});

async function ejecutarPromesas() {
    try {
        const getPaises = await paises;
        const getEstados = await estados;

        const estadosDeMexico = getEstados.filter(estado => estado.idPais === 1);
        const estadosDeMexicoMayus = estadosDeMexico.map(estado => estado.nombre.toUpperCase());

        console.log(getPaises);
        console.log(estadosDeMexicoMayus);
    }
    catch (error) {
        console.log(error);
    }
}
ejecutarPromesas();


// Parte2
fetch('nombres.json')
.then((respuesta) => respuesta.json())
.then((resultadoFinal) => console.log(resultadoFinal));

// Parte3
async function obtenerJson() {
    try {

        const campos = document.getElementById('campos');

        const resp = await fetch('nombres.json');
        const data = await resp.json();
        console.log(data.nombres);

        // Parte4
        data.nombres.forEach(valor => {
            const option = document.createElement('option');
            option.value = valor.nombre;
            option.textContent = valor.nombre;
            campos.appendChild(option);
        });

        

    } catch (error) {
        console.log(error);
    }
}

obtenerJson();