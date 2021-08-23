<div align="center">
  <h1>Poo Basico Js</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" alt="platzi logo" height="300px">
  <h3 style="font-weight:bold;" >Curso Poo js Basico Platzi (4H)</h3>
  <h5></h5>
</div>

## Requisitos :clipboard:

*   Curso HTML y JS Basico
*   Clousures y Scope
*   Fundamentos de Poo 
*   Curso de prework en; OSX (Mac), Windows o Linux.

## Comenzando 🚀

<p>En este curso se adjuntara las ramas de cada Seccion para no mezclar todo el contenido dentro de la misma rama y se adjuntara la documentacion necesaria para poder recuperar los ejemplos independientes.</p>
<p>Todos los proyectos seras realizados con variables de entorno y bases de datos locales.</p>

## Descripcion :notebook:
**Aprender Poo con Javascript Moderno**
<p>Este curso tiene por objetivo explicar en profundidad como funcionan la programacion orientada objetos y como el azucar sintactico de JS y las nuevas actualizaciones que trae ECMA mejoran cada dia Javascript. </p>

## Listado de Temas del Curso: 💯
    *   Introduccion al paradigma de la Programacion orientada a objetos


### Listado de Secciones: 🧟


#### Que es Javascript 
* JavaScript es un lenguaje de programación orientado a objetos, aunque basado en prototipos porque los objetos están (internamente) construidos con prototipos.📌


#### Definicion Sc2: Que es Poo 
* 📌  En la programación, existen múltiples paradigmas para resolver los algoritmos, es decir, lineamientos sobre los cuales podemos basarnos para solucionar un problema. Por ejemplo:

  * Estructurado
  * **Orientado a Objetos**
  * Funcional
**Nota.** Ningún paradigma es mejor que otro, son distintos enfoques, su uso depende de el contexto y de los requerimientos que necesitemos en nuestros proyectos.

#### Sc3: Conceptos del Poo.
* Conceptos:
  * **Clase:** Representación de métodos y atributos que representan a una entidad.
  * **Objeto:** Instancia de una clase.
  * **Herencia:** Crear nuevas clases con características similares a partir de otras.
  * **Encapsulamiento:** Esconder datos que solo pueden ser accedidos por la clase.
  * **Polimorfismo:** Un objeto puede comportarse de muchas formas, ejemplo: En herencia, las clases hijas pueden comportarse como su clase padre y viceversa.

#### Sc4: Que es un Objeto en Javascript
* Conceptos:
  * **Objeto:** Instanciación de una Clase, Prototipo, o Objeto Prototipo.
  * **Prototipo:** Agrupación de métodos donde un objeto específico tiene acceso.
  * **Objeto Prototipo:** Es un objeto omnipresente preestablecido, dando por resultado que todo objeto instanciado en javascript será heredado directa o indirectamente del Objeto Prototipo y mediante el atributo **__proto__** vamos se podrá acceder a su respectivo prototipo.
  * En imagen podemos ver esta herencia o también llamada Prototype Chain - [ver enlace](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) .
  <img src="https://static.platzi.com/media/user_upload/prototype%20object-c20c05a7-da04-4c0d-b034-2816756ef0d2.jpg" alt="platzi-poo-objetos" height="300px">

#### Sc5: Objetos literales y prototipos en Js
  * **Prototipos (Prototypes)**
JavaScript es un lenguaje basado en prototipos, por lo tanto entender el objeto prototype es uno de los conceptos más importantes que los profesionales de JavaScript necesitan saber. Este artículo te dará una breve descripción del objeto prototype a través de varios ejemplos. Antes de leer este artículo, deberás tener un entendimiento básico de la referencia this en JavaScript.

* **Objeto prototype**
En honor a la claridad, vamos a examinar el siguiente ejemplo:

```javascript
function Punto2D(x, y) {
  this.x = x;
  this.y = y;
}
```

* Al declararse la función Punto2D, una propiedad predeterminada llamada prototype será creada para ella (ten en cuenta que, en JavaScript, una función es también un objeto). La propiedad prototype es un objeto que contiene una propiedad constructor y su valor es la función Punto2D: **Punto2D.prototype.constructor = Punto2D**. Y cuando tú llamas a Punto2D con la palabra reservada new, **los objetos recién creados heredarán todas las propiedades de Punto2D.prototype**. Para verificar esto, puedes agregar un método llamado mover en Punto2D.prototype de la siguiente manera:

```javascript
Punto2D.prototype.mover  = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}

var p1 = new Point2D(1, 2);
p1.mover (3, 4);
console.log(p1.x); // 4
console.log(p1.y); // 6
```
El **Point2D.prototype** es llamado objeto prototipo o prototipo del objeto p1 y de cualquier otro objeto creado con la sintaxis **new Point2D(…)** . Puedes agregar tantas propiedades al objeto Point2D.prototype como quieras. Lo que suele hacerse es declarar métodos en Point2D.prototype y otras propiedades se declararán en la función constructora.

Los objetos integrados en JavaScript se construyen de manera similar. Por ejemplo:

El prototipo de los objetos creados con la sintaxis new Object() o { } es Object.prototype
El prototipo de los arreglos creados con la sintaxis new Array() o [ ] es Array.prototype
Y es igual con otros objetos integrados como Date y RegExp.
Object.prototype es heredado por todos los objetos y no tiene prototipo (su prototipo es null)

**Cadena de prototipos**

El mecanismo de la cadena del prototipo es simple: cuando accede a una propiedad p en el objeto obj, el motor de JavaScript buscará esta propiedad dentro del objeto obj. Si el motor falla en la búsqueda, continúa buscando en el prototipo de objeto obj y así sucesivamente hasta llegar a Object.prototype. Si finalizada la búsqueda no se ha encontrado nada, el resultado será undefined. Por ejemplo:

```javascript
var obj1 = {
  a: 1,
  b: 2
};

var obj2 = Object.create(obj1);
obj2.a = 2;

console.log(obj2.a); // 2
console.log(obj2.b); // 2
console.log(obj2.c); // undefined

```
En el fragmento de código anterior, la declaración **var obj2 = Object.create(obj1)** creará el objeto **obj2** con el objeto prototipo **obj1.** En otras palabras, **obj1** se convierte en el prototipo de **obj2** en lugar de Object.prototype por defecto. Como puedes ver, **obj1** es una propiedad de **obj2**, pero puedes acceder a ella a través de la cadena de prototipos. Sin embargo, para la propiedad c, se obtiene un valor undefined porque no se puede encontrar en **obj1** y en **Object.prototype.**



### 📘 Explicaciones de los principales paradigmas de la programacion
#### Programación Imperativa:
* Los primeros lenguajes de programación y por extensión, también los primeros programas informáticos, se basaban completamente en este enfoque, que prevé una secuencia regularizada de órdenes o instrucciones determinadas. Este paradigma de programación es la base, por ejemplo, de los veteranos lenguajes Pascal y C, así como de todos los lenguajes ensambladores, entre otros. En la programación imperativa, el centro de atención radica, entre otras cosas, en trabajar lo más cerca posible del sistema. Como consecuencia, el código de programación resultante es fácil de comprender y a la vez, muy abarcable.

<img src="https://static.platzi.com/media/user_upload/imperativa-0c4d4820-4441-4500-b026-064b3199c9fa.jpg" alt="platzi-poo-imperativa" height="300px">

#### Programación estructurada:
* La principal modificación del principio básico radica en que, en lugar de instrucciones de salto absolutas (instrucciones que provocan que el procesamiento no continúe con la siguiente instrucción, sino en otro lugar) este paradigma de programación de software prevé el uso de bucles y estructuras de control.

<img src="https://static.platzi.com/media/user_upload/estructurada-d4d448e4-7942-40a6-85d5-d30722dbfacf.jpg" alt="platzi-poo-imperativa" height="300px">

#### Programación procedimental:
* El paradigma de programación procedimental amplía el enfoque imperativo con la posibilidad de desglosar algoritmos en porciones manejables. Estos se denominan como procedimientos, dependiendo del lenguaje de programación, o también como subprogramas, rutinas o funciones. El sentido y el propósito de esta distribución es hacer que el código de programa sea más claro y evitar las repeticiones innecesarias de código.

<img src="https://static.platzi.com/media/user_upload/PROGRAMACI%C3%93N%2BPROCEDIMENTAL-5c30f5b1-b8bf-4abd-9f8b-9c961515ce49.jpg" alt="platzi-poo-imperativa" height="300px">

#### Programación modular:
* El código fuente se divide específicamente en bloques parciales lógicos independientes los unos de los otros para proporcionar más transparencia y facilitar el proceso de debugging (resolución de errores). Los bloques parciales individuales, denominados módulos, se pueden probar por separado antes de vincularlos posteriormente a una aplicación conjunta

<img src="https://static.platzi.com/media/user_upload/modular-619bc282-c0ef-4202-9ac3-88812d0f327b.jpg" alt="platzi-poo-imperativa" height="300px">


#### Programación declarativa:
* Radica en la descripción del resultado final que se busca. Por lo tanto, en primera línea se encuentra el “qué” del resultado y no el “cómo” de los pasos que llevan a la solución, como es el caso en la programación imperativa. Esto provoca que el código de la programación declarativa sea más difícil de comprender debido al alto grado de abstracción, aunque resulta muy corto y preciso.

<img src="https://static.platzi.com/media/user_upload/declaratividad-cbec0af6-2e91-4d12-8b85-074154119b95.jpg" alt="platzi-poo-imperativa" height="300px">

#### Programación funcional:
* Un programa de programación funcional consta de llamadas de función concatenadas en las que cada parte del programa se interpreta como una función. En este sentido, las funciones dentro de la programación funcional pueden adoptar distintas “estructuras”. Por ejemplo, se pueden vincular entre sí como datos o se pueden utilizar en forma de parámetros. Asimismo, se pueden utilizar como resultados de función. En contraposición, el paradigma se ocupa de que no haya asignaciones independientes de valores.
<img src="https://static.platzi.com/media/user_upload/function-03498817-3e30-4d2c-bdb4-1875a040b8fb.jpg" alt="platzi-poo-imperativa" height="300px">

#### Programación lógica:
* El paradigma de software lógico, denominado también como programación predicativa, se basa en la lógica matemática. En lugar de una sucesión de instrucciones, un software programado según este principio contiene un conjuntode principios que se pueden entender como una recopilación de hechos y suposiciones. Todas las solicitudes al programa se procesan de forma que el intérprete recurre a estos principios y les aplica reglas definidas previamente para alcanzar el resultado deseado.

<img src="https://static.platzi.com/media/user_upload/logica-19f3610f-91cf-4701-b42c-97fc69ad42cb.jpg" alt="platzi-poo-imperativa" height="300px">

### 