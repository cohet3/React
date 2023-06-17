import { useState } from "react";
import AddCategory from "./components/AddCategory";



export const GifExpertApp = () => {
  const [ categories, setCategories ]= useState(['LoL','Dragon Ball']);
  const onAddCategory = () => { 
      // categories.push('Valorant');
      setCategories([ 'Valorant',...categories ])

  }
  


  return (
      <>
        {/* {titulo} */}
        <h1>GitExpertApp</h1>
        <AddCategory />
        
        
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {categories.map( category => {
            return <li key={ category }>{ category }</li>})}    
        </ol>
      </>
  )
}

export default GifExpertApp
// WiU973VA3HNP8z6ZbV5UU1carU0cGHFC