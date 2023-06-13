import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";

describe('Pruebas en CounterApp', () => {

const initialValue=100
    test('Debe hacer match cn el snapshot', () => {
        
        const { container }= render( <CounterApp value= { initialValue } />)
        
        expect( container ).toMatchSnapshot();
      
    })
    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
        render( <CounterApp value= { 100 }  />);
        expect(screen.getAllByText(100) ).toBeTruthy();
        // screen.debug();
    })
    test('Debe de incrementar con el +1', () => {
        render( <CounterApp value= { initialValue }  />);
        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText('101') ).toBeTruthy();
    })
    test('Debe de decrementar con el -1', () => {
        render( <CounterApp value= { initialValue }  />);
        fireEvent.click( screen.getByText('-1'))
        expect( screen.getByText('99') ).toBeTruthy();
    })
    test('Debe de reiniciar con el boton reset', () => {
        render( <CounterApp value= { initialValue }  />);
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        // fireEvent.click( screen.getByText('Reset'))
        // screen.debug();
        // screen.getByRole('button', { name: 'btn-reset'})
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));

        expect( screen.getByText('100') ).toBeTruthy();
    })
    
  
})
