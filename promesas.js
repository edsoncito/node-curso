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


const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre
        if (empleado) {
            resolve(empleado)
        } else {
            reject("no existe empleado")
        }
    });
    return promesa

}

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.sueldo
        if (salario) {
            resolve(salario)
        } else {
            reject("no existe salario")
        }
    });
    return promesa

}

const id = 30


// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err))


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))


let nombre
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log("el empleado " + nombre + " su salario : " + salario))
    .catch(err => console.log(err))




