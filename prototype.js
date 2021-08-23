// sc5: prototype
console.group('Prototipos SC5')
const jesus = {
    name: 'Jesus Mª',
    age : 37,
    cursosAprobados: [
        'Html 5 y Css3',
        'Basico de Poo',
        'Intermedioi de Poo'
    ],
    aprobarCurso (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

function Estudiante(name,age,cursosAprobados){
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso)
    // }
}

Estudiante.prototype.aprobarCurso = function (nuevoCurso){ 
    this.cursosAprobados.push(nuevoCurso)
}

const xabi = new Estudiante(
    'Xabi Rico',
    9,
    ["Introduccion a la programacion"]
)

console.log(xabi);


// Añadir otro curso en el array de cursosAprobados
jesus.cursosAprobados.push('Curso Fundamentos de Javascript')
console.log(jesus);
jesus.name = 'Jesus Maria'
console.log(jesus)
jesus.aprobarCurso('Curso Profesional de Javascript')
console.log(jesus);

console.groupEnd()