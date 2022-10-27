
let objeto1 = {a: 1, b: 2, c: 3}
let objeto2 = {a: "Apple", b: "Pink", c: "Green"}
let objeto3 = {ke1: "true", key2: "false", key3: "undefined"}
const Resultado =  document.getElementById("objetos")

function getKeyAndValues(parametro)
{
    let KeyAndValues = []
    let key = Object.getOwnPropertyNames(parametro)
    key = key.sort()
    let valor = []
    for(let i = 0; i < key.length; i++){
        valor.push(parametro[key[i]])
    }
    KeyAndValues.push(key)
    KeyAndValues.push(valor);
    return KeyAndValues;
}

let resultado = getKeyAndValues(objeto1)
let resultado2 = getKeyAndValues(objeto2)
let resultado3 = getKeyAndValues(objeto3)

console.log("[" + resultado[0] + "]" + "[" + resultado[1] + "]")
console.log("[" + resultado2[0] + "]" + "[" + resultado2[1] + "]")
console.log("[" + resultado3[0] + "]" + "[" + resultado3[1] + "]")