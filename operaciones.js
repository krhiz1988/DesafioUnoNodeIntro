const fs = require("fs");
const citas = require("./citas.json");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  citas.push({
    "Nombre Animal:": nombre,
    "Edad:": edad,
    "Tipo Animal:": tipo,
    "color Animal:": color,
    "Enfermedad:": enfermedad,
  });

  try {
    fs.writeFileSync("citas.json", JSON.stringify(citas));
  } catch (error) {
    console.log(error);
    console.log("Ha ocurrido un error, intentelo nuevamente");
  }
};

const leer = () =>{
    const mostrar = fs.readFileSync('citas.json', 'UTF-8');
    const data = JSON.parse(mostrar)
    console.log(data)
}

module.exports = {registrar, leer}
