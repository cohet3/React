import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr', () => {
    test('debe de retornar un string y uyn número', () => {
        const [ letters, numbers ] = retornaArreglo();
        //primera forma de hacerlo
        expect( letters ).toBe( 'ABC');
        expect( numbers ).toBe( 123 );
        //segunda forma de hacerlo
        expect( typeof letters ).toBe( 'string');
        expect( typeof numbers ).toBe( 'number' );
        //tercera forma de hacerlo
        expect( letters ).toEqual( expect.any(String) );
    });
});