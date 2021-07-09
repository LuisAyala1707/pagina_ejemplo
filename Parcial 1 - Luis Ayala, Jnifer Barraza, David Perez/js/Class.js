
/*
miStorage = window.localStorage
miStorage.setItem('nombre', 'Luis');
var nombre = miStorage.getItem('nombre');

alert('mi nombre es: '+nombre)
console.log(`Hola, mi nombre es: ${nombre}`)


localStorage.removeItem('nombre')

localStorage.clear();
*/


miStorage = window.localStorage;

localStorage.setItem('Nombre', 'Luis');
localStorage.setItem('Apellido1','Ayala');
localStorage.setItem('Apellido2', 'carrillo');

var mombre = localStorage.getItem('Nombre');
var ape1 = localStorage.getItem('Apellido1');
var ape2 = localStorage.getItem('Apellido2');

alert('Mi nombre es '+nombre+' y apellidos son '+ape1+ " "+ape2)
console.log(`hola, mi nombre es ${nombre} ${ape1} ${ape2}`)


/*
miStorage = window.localStorage;

let Mipersona={
    Nombre  :  "Luis Guillermo",
    Apellido1  : "Ayala",
    Apellido2  : "Carrillo",
    Cargo : "Estudiante"
}

miStorage.setItem('persona', JSON.stringify(Mipersona));

let persona1 = miStorage.getItem('pesona');

let personajson = JSON.parse(miStorage.getItem('persona'))
console.log(persona1)
console.log(personajson)

console.log(personajson.Apellido1)
*/


/*
var usuarios=[]
usuarios.push({id: '1', nombre: 'Luis', Apellido1: 'Ayala', Apellido2: 'Carrillo', cargo: 'Estudiante'})
usuarios.push({id: '2', nombre: 'Bryan', Apellido1: 'Fernandez', Apellido2: 'Ebrath', cargo: 'Docente'})
usuarios.push({id: '3', nombre: 'Lucia', Apellido1: 'Berdugo', Apellido2: 'losano', cargo: 'Docente'})
usuarios.push({id: '4', nombre: 'Brandon', Apellido1: 'Fenix', Apellido2: 'Ernanderz', cargo: 'Celador'})

usuariosjson = JSON.stringify(usuarios)
listausuarios=JSON.parse(usuariosjson)
alert(listausuarios[0].nombre + " "+listausuarios[2].cargo)
*/




miStorage = window.localStorage;
id=parseInt(0);
var operaciones=[];
function procesar(){
    var base = document.getElementById('base').value 
    var altura = document.getElementById('altura').value
    if (base=="" || altura=="" ){

        alert("Error!!! Llene las casillas correspondientes ")
    }
    else{
        base = parseInt(base)
        altura = parseInt(altura)
        area = base*altura
        alert("El area es: " + area)
        id = id+1
        operaciones.push({ ID: id, Base: base, Altura: altura, Area: area});
        miStorage.setItem('operacion', JSON.stringify(operaciones));
        let operacionjson=JSON.parse(miStorage.getItem('operacion'));
        console.log(operaciones)
    }
}
function limpiar(){
    localStorage.clear();
}








