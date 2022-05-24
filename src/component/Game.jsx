import React, { useContext, useState } from 'react'
import { Questios } from '../helpers/Questios'
import { QuizContext } from '../helpers/QuizContext'

function Game() {
    const {setPage,score,setScore} = useContext(QuizContext)
    const [currentQuestion,setCurrentQustion] = useState(0)
    const [active,setActive] = useState(0)
    const [choice,setChoce] = useState("")
    function choiceAnswer(variant,active){
        setChoce(variant)
        setActive(active)
    }
    function nextHandler() {
        if (Questios[currentQuestion].answer === choice){
            setScore(score +1)
            setActive(0)
        }
        
        setCurrentQustion(currentQuestion + 1)
    }
    function finish() {
        if (Questios[currentQuestion].answer === choice){
            setScore(score +1)
        }
        setPage('end')
    
    }
  return (
    <div className='Game'>
        <h1>{Questios[currentQuestion].prompt}</h1>
        <button className={active === 1 ? 'active' : ''} onClick={()=>choiceAnswer('optionA',1)}>{Questios[currentQuestion].optionA}</button>
        <button className={active === 2 ? 'active' : ''} onClick={()=>choiceAnswer('optionB',2)}>{Questios[currentQuestion].optionB}</button>
        <button className={active === 3 ? 'active' : ''} onClick={()=>choiceAnswer('optionC',3)}>{Questios[currentQuestion].optionC}</button>
        <button className={active === 4 ? 'active' : ''} onClick={()=>choiceAnswer('optionD',4)}>{Questios[currentQuestion].optionD}</button>
       {currentQuestion === Questios.length - 1 ? <button onClick={finish}>Finish</button> :
       <button onClick={nextHandler}>Next Questios</button>}
        
    </div>
  )
}

export default Game