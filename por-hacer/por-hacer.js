const fs = require(`fs`);

let listadoPorHacer = [];
const filePath = `db/data.json`;

//guarda la data en un archivo JSON
const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);


    fs.writeFile(filePath, data, (err) => {
        if (err) {
            throw new Error(`No se pudo grabar`, err);
        }
    })
}

const loadDB = () => {

    try {

        listadoPorHacer = require(`../db/data.json`);

    } catch (error) {

        listadoPorHacer = [];

    }

}

let crear = (descripcion) => {
    loadDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    saveDB();

    return porHacer;
}

const getListado = () => {
    loadDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    loadDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })


    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    loadDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        saveDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}