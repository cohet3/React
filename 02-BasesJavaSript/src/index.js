import heroes, { owners } from "./data/heroes";



const activo = true;

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 
// const mensaje = ( activo ) ? 'Activo' : null; 
const mensaje = activo && 'Activo';


console.log(mensaje);

const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );


// Arreglos en JS
// const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );


// console.log( owners );




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
//esta funcion es la de arriba pero sin simplificar
const HeroesporiD = (id)=>{
    return heroes.find(( heroes )=>{
        if (heroes.id === id){
            return true;
    }else{
        return false
    }
    });
}

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
const hiroporOwner =(owner) => {
    return heroes.find(( heroes )=>{
        if (heroes.owners === owners){
            return true;
    }else{
        return false
    }
    });
}

// console.log( getHeroesByOwner('Marvel') );


