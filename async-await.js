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

const id = 10


const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return "el salario del empleado : " + empleado + " es de: " + salario
    } catch (error) {
        throw error
    }
}

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))