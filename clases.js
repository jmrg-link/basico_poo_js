//SC:6 - clases

// Prototipos con la sintaxis de clases

class Student {
    constructor({ name,age,cursosAprobados,email}){
        this.name = name
        this.age = age
        this.cursosAprobados = []
        this.email = email
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

const jesus = new Student({
    name:'Jesus Mª',
    age: 37,
    cursosAprobados:[],
    email:'qwerty@SpeechGrammarList.com'
})
