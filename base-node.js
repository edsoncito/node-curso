const fs = require("fs");

const num = 5
let salida = ''

for (let index = 1; index < 11; index++) {
    salida += num + " x " + index + " = " + index * num + "\n"
}

console.log(salida)



fs.writeFileSync("tabla-"+num+".txt", salida)
