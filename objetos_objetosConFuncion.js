// // ---------------------------------------------------------------------------------------------------

// var persona = {
//     nombre: ['Ed'],
//     edad: 32,
//     saludo: function(){
//         console.log('Hola!, mi nombre es ' + persona.nombre + '.');
//     },
//     deciredad: function(){
//         console.log('Y tengo ' + persona.edad + ' años.');
//     },
    
// }

// persona.saludo();
// persona.deciredad();

// ----------------------------------------------------------------------------------------------------

// function Persona(nombre, apellidos, edad){
   
//     this.nombre = nombre;
//     this.apellidos= apellidos;
//     this.edad = edad;
    
//     }
    
// var nuevapersona = new Persona('Loa ', 'Equis ', 21);

// console.log('Hola, mi nombre es ' + nuevapersona.nombre + ' ' + nuevapersona.apellidos + 'y tengo ' + nuevapersona.edad + ' años.')

// // ---------------------------------------------------------------------------------------------------

// var persona2 = {
//     nombre: 'Eli ',
//     apellidos: 'Ans',
//     edad: 21,
//     saludar: function(){
//         console.log('Hola, mi nombre es ' + this.nombre + this. apellidos + ' y tengo ' + this.edad + ' años.')
//     }
// }    

// persona2.saludar();

// -----------------------------------------------------------------------------------------------------

function Persona1(nombre, apellido, edad){

    return{
        nombre:nombre,
        apellido:apellido,
        edad:edad,
        saludo: function(){
            console.log('Mi nombre es ' + this.nombre + ' ' + this.apellido);

        },
        laEdad: function(){
            console.log('Mi edad es '  + this.edad + ' años');
        },
    };
};

var nombre = Persona1('Santiago ', 'García ', 23 );

nombre.saludo();
nombre.laEdad();








// -----------------------------------------------------------------------------------------------------