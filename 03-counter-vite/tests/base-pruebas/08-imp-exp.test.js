import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from "../../src/base-pruebas/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );

        expect ( hero ).toEqual({ id: 1, name: 'Batman', owner:'DC' })
    });

    test('getHeroById debe de retornar undefined si no existe', () => {
        const id = 32;
        const hero = getHeroeById( id );
        // console.log(hero)
        expect ( hero ).toBeFalsy();
    });

    //Tarea:
    //Debe de retornar ubn arreglo con los héroes de DC
    //length === 3
    //toEqual al arreglo filtrado

    //debe de rotornar un arreglo con los héroes de marvel
    //length === 2
    test('getHeroesByOwner debe filtrar varios heroes por DC', () =>{
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            {"id": 1, "name": "Batman", "owner": "DC"}, 
            {"id": 3, "name": "Superman", "owner": "DC"}, 
            {"id": 4, "name": "Flash", "owner": "DC"}
        ]);
        
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
    });
    test('getHeroesByOwner debe filtrar varios heroes por Marvel', () =>{
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );

    expect( heroes.length ).toBe( 2 );
    expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))

    });
    
});