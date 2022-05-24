import React, { useContext } from 'react'
import { useState } from 'react'
import { QuizContext } from '../helpers/QuizContext'

function Menu() {
    const {setPage,value,setValue} = useContext(QuizContext)

    function handlerInput(e){
        setValue(e.currentTarget.value)
    }
    function handleClick() {
            setPage("game")
    }
  return (
    <div className='Menu'>
    <input value={value} onChange={handlerInput} placeholder='name'/>
        <button onClick={handleClick}>Quiz start</button>
    </div>
  )
}

export default Menu