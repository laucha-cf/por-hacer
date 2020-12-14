const descripcion = {
    demand: true,
    alias: `d`,
    desc: `Descripcion de la tarea por hacer`
};

const completado = {
    default: true,
    alias: `c`,
    desc: `Marca como completado o pendiente`
}


const argv = require(`yargs`)
    .command(`crear`, `crea una nueva tarea por hacer`, { descripcion })
    .command(`actualizar`, `actualiza una tarea por hacer`, {
        descripcion,
        completado
    })
    .command(`borrar`, `Borra una tarea`, { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}