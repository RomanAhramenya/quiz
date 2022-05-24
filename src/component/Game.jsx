import React, { useContext, useState } from 'react'
import { Questios } from '../helpers/Questios'
import { QuizContext } from '../helpers/QuizContext'

function Game() {
    const {setPage,score,setScore} = useContext(QuizContext)
    const [currentQuestion,setCurrentQustion] = useState(0)
    const [choice,setChoce] = useState("")
    function choiceAnswer(variant){
        setChoce(variant)
    }
    function nextHandler() {
        if (Questios[currentQuestion].answer === choice){
            setScore(score +1)
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
        <button onClick={()=>choiceAnswer('optionA')}>{Questios[currentQuestion].optionA}</button>
        <button onClick={()=>choiceAnswer('optionB')}>{Questios[currentQuestion].optionB}</button>
        <button onClick={()=>choiceAnswer('optionC')}>{Questios[currentQuestion].optionC}</button>
        <button onClick={()=>choiceAnswer('optionD')}>{Questios[currentQuestion].optionD}</button>
       {currentQuestion === Questios.length - 1 ? <button onClick={finish}>Finish</button> :
       <button onClick={nextHandler}>Next Questios</button>}
        
    </div>
  )
}

export default Game