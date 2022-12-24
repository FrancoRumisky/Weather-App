import React, { useState } from 'react';
import style from "./styles/SearchBar.module.css"

export default function SearchBar({onSearch}) {
  let [inputValue,setInputValue] = useState("");
  // acá va tu código
  return <div>
            <input className={style.citi} type="text" placeholder="Cuidad..." value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)} >
            </input>
            <button className={style.btn} onClick={(e) => {onSearch(inputValue); setInputValue("")}} > Agregar 
            </button>  
          </div>
         
};