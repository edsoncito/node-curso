const empleados = [
    {
        id: 1,
        nombre: "juan"
    },

    {
        id: 2,
        nombre: "pedro"
    },
    {
        id: 3,
        nombre: "pepe"
    },

];

const salarios = [
    {
        id: 1,
        sueldo: 3000
    },
    {
        id: 2,
        sueldo: 1000
    }
];


const getempleados = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado)
    } else {
        callback("el usuario " + id + " no existe")
    }
}

const getsalarios = (id, callback) => {
    // console.log(id)
    const salario = salarios.find(s => s.id === id)
    // console.log(e.id)
    // console.log(id)
    if (salario) {
        callback(null, salario)
    } else {
        callback("el usuario " + id + " no existe")
    }
}

const id = 1


getempleados(id, (err, empleado) => {

    if (err) {
        console.log("error")
        return console.log(err)
    }

    console.log("existe el usuario")
    console.log(empleado)
})


getsalarios(id, (err, salario) => {

    if (err) {
        console.log("error")
        return console.log(err)
    }

    console.log("existe el usuario")
    console.log(salario.sueldo)
})





