import { useState } from "react";



const AddCategory = () => {
    const [inputValue, setInputValue] = useState('LoL');
    const onInputChange= (event) =>{
        setInputValue(event.target.value);
    } 
    const onSumit= ( event )=>{
        event.preventDefault();
        console.log(inputValue);
    }
  return (
    <form onSubmit={ (event) => onSumit(event)}>
        <input 
        type='text'
        placeholder="Buscar gifs" 
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>
  )
}

export default AddCategory
