let fs = require ("fs");
let tareasJson = fs.readFileSync("./tareas.json", {enconding: "utf-8"})
let tareas = JSON.parse(tareasJson);
let process = require("process");
let accion = process.argv[2]

switch (accion){
    case "listar":
        console.log("Listado de tareas")
        console.log("-----------------")
        for (let i =0; i < tareas.length; i++) {
            console.log(`${i + 1}. ${tareas[i].titulo} - ${tareas[i].estado}`)
        }
        break;

    case undefined:
            console.log();    
            console.log('Atención - Tienes que pasarme una acción');
            console.log('Las acciones disponibles son: listar');
            console.log('----------------------------------------');
            break;
    
        default:
            console.log('------------------------------------');
            console.log('No entiendo qué quieres hacer');
            console.log('Las acciones disponibles son: listar');
            console.log('------------------------------------');
            break; 
}


