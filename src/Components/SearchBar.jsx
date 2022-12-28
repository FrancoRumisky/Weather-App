import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./styles/SearchBar.module.css"

export default function SearchBar({onSearch}) {
  let [inputValue,setInputValue] = useState("");

const history = useHistory()

  const search = () => {
    onSearch(inputValue)
    setInputValue("")
    history.push("/")
  }
  
  return <div>
            <input className={style.citi} type="text" placeholder="Cuidad..." value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)} >
            </input>
            <button className={style.btn} onClick={(e) => search()}> Agregar 
            </button>  
          </div>
         
};