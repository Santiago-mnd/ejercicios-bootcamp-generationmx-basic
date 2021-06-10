var eleccion = prompt('¿Qué escoges? (piedra, papel o tijera)')
var usuario = eleccion.toLowerCase();
var opciones = ['piedra','papel','tijera'];
var maquina = opciones[Math.floor(Math.random() * (0 , 2) )];

switch(true){
    case (usuario === maquina):
        alert('¡Empate, prueba de nuevo!')
        break;
    case (maquina === 'piedra' && usuario === 'papel'):
        alert('¡Ganaste, papel cubre a la piedra!')
        break;
    case (maquina === 'papel' && usuario === 'tijera'):
        alert('¡Ganaste, tijeras cortan papel!')
        break;
    case (maquina === 'tijera' && usuario === 'piedra'):
        alert('¡Ganaste, piedra rompe tijeras!')
        break;
    default:
        alert('¡Perdiste, prueba de nuevo!');                

}