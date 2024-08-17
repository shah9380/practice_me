import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../AppContextProvider'

const Home = () => {
    const {obj, setObj, changeValue} = useContext(AppContext);
  return (
    <div>
        <Link to="/home">{obj.name}</Link>
        <input type="text" value={obj.name}  onChange={(event)=>{changeValue("name", event.target.value)}} />
        <button>Console it</button>
        <p>{obj.name}</p>
        <input type="text" onChange={(event)=>{changeValue("name", event.target.value)}} />
    </div>
  )
}

export default Home