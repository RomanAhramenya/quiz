import React, { useContext } from 'react'
import { Questios } from '../helpers/Questios'
import { QuizContext } from '../helpers/QuizContext'

function EndScreen() {
    const {score,setPage,setScore,setValue,setPlayer,value,player} = useContext(QuizContext)
    function reset() {
        setPage('menu')
        setPlayer([...player,{name:value,score:score}])
        setScore(0)
        setValue("")
    }
  return (
    <div className='End'>
        <h1>score</h1>
        <div>{score} / {Questios.length}</div>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default EndScreen