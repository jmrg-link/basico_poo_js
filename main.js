//Prototipe de Comment
class Comment {
    constructor({
      id,
      username,
      info,
    }) {
      this.id = id;
      this.username = username;
      this.info = info;
    }
  }
  
  //Prototipe de BlogPost
  class BlogPost {
    constructor({
      id,
      title,
      info,
      comments = [],
    }) {
      this.id = id;
      this.title = title;
      this.info = info;
      this.comments = comments;
    }
  
    addComment(id, username, info) {
      new Comment ({
        id: id,
        username: username,
        info: info,
      })
      this.comments.push(Comment);
    }
  };
  
  const BlogDesarrollo = new BlogPost({
    id: 0,
    title: 'Como iniciar en el Desarrollo Web',
    info: 'lorem ipsum',
  })
  
  
  //Prototipe de Teacher
  class Teacher {
    constructor({
      name,
      area,
      twitter = undefined,
      instagram = undefined,
    }) {
      this.name = name;
      this.area = area;
      this.socialMedia = {
        twitter,
        instagram,
      }
    }
  };
  
  const FreddyVega = new Teacher({
    name: 'Freddy Vega',
    area: 'Desarrollo Web/ CEO Platzi',
  });
  
  const JuanDC = new Teacher({
    name: 'Juan David Castro',
    area: 'Data Sciece / Desarrollo Web',
  });
  
  const DiegoDegranda = new Teacher({
    name: 'Diego De Granda',
    area: 'Desarrollo Web',
  });
  
  
  //Prototipe de Lesson
  class Lesson {
    constructor({
      id,
      title,
      teacher,
      comments = [],
    }) {
      this.id = id;
      this.title = title;
      this.comments = comments;
      this.teacher = teacher;
    }
  
    addComment(id, username, info) {
      new Comment ({
        id: id,
        username: username,
        info: info,
      })
      this.comments.push(Comment);
    }
  }
  
  const lesson1PB = new Lesson({
    id: 0,
    title: 'Clase 1 del curso de Programacion Basica',
    teacher: FreddyVega,
  });
  
  const lesson1DH = new Lesson({
    id: 0,
    title: 'Clase 1 del curso definitivo de HTML',
    teacher: DiegoDegranda,
  });
  
  //Prototipe de Courses
  class Course {
    constructor({
      name,
      logo = undefined,
      info,
      comments = [],
      clases = [],
    }) {
      this.name = name;
      this.logo = logo;
      this.info = info;
      this.comments = comments;
      this.clases = clases;
    }
  
    addComment(id, username, info) {
      new Comment ({
        id: id,
        username: username,
        info: info,
      })
      this.comments.push(Comment);
    }
  };
  
  const CursoProgBasica = new Course({
    name: 'Curso de Programacion Basica',
    info: 'Curso de introduccion a la programacion.',
    clases: [lesson1PB],
  });
  
  const CursoDefHTML = new Course({
    name: 'Curso definitivo de HTML',
    info: 'Curso completo de HTML',
    clases: [lesson1DH],
  });
  
  const CursoIntroWeb = new Course({
    name: 'Curso de introduccion a la web',
    info: 'Curso introductivo',
    clases: [lesson1DH],
  });
  
  const CursoPractHTML = new Course({
    name: 'Curso Practico de HTML',
    info: 'Curso de Practica de HTML',
    clases: [lesson1DH],
  });
  
  const CursoDataBS = new Course({
    name: 'Curso de Data Bussines',
    info: 'Curso completo de Data Busines',
    clases: [lesson1DH],
  });
  
  const CursoDeTB = new Course({
    name: 'Curso de Tableau',
    info: 'Curso de Tableau',
    clases: [lesson1DH],
  });
  
  //Prototipe de Rutas 
  class LearningSchool {
    constructor({
      name,
      logo = undefined,
      info,
      courses = [],
    }) {
      this.name = name;
      this.logo = logo;
      this.info = info;
      this.courses = courses;
    }
  }
  
  const DesarrolloWeb = new LearningSchool({
    name: 'Escuela de Desarrollo Web',
    courses: [
      CursoIntroWeb,
      CursoPractHTML,
      CursoDefHTML,
    ],
    info: 'Aprende desarrollo web Full Stack desde cero con HTML, CSS y JavaScript. Domina herramientas como React, Vue, Angular y backend development con Node.js.',
  });
  
  const DataScience = new LearningSchool({
    name: 'Escuela de Data Science',
    courses: [
      CursoDataBS,
      CursoDeTB,
    ],
    info: 'Domina las herramientas y técnicas para el procesamiento de Big Data y Ciencia de Datos.',
  });
  
  //Prototipe de Estudiantes
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }){
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    };
  
    addLearningPath(nuevaEscuela) {
      this.learningPaths.push(nuevaEscuela);
    };
  
    addNewCourse(nuevoCurso) {
      this.approvedCourses.push(nuevoCurso);
    }
  };
  
  const jesus = new Student({
    name: 'jesus maria',
    email: 'jrico@gmail.com',
    username: 'jrico',
    twitter: 'jrico'
  });