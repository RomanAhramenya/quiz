
import { useState } from 'react';
import './App.css';
import EndScreen from './component/EndScreen';
import Game from './component/Game';
import Menu from './component/Menu';
import { QuizContext } from './helpers/QuizContext';

function App() {
  const [page,setPage] = useState('menu')
  const [score,setScore] = useState(0)
  const [player,setPlayer] = useState([])
  const [value,setValue] = useState("")
  return (
    <div className="App">
    <QuizContext.Provider value={{
      page,
      setPage,
      score,
      setScore,
      setPlayer,
      player,
      value,
      setValue
    }}>
      {page === 'menu' && <Menu/>}
      {page === 'game' && <Game/>}
      {page === 'end' && <EndScreen/>}
      <div className='Rezult'>
      rezult:
        {player.length > 0 && player.map(el=>{
          return <div>
            {el.name} = {el.score}
          </div>
        })}
      </div>
    </QuizContext.Provider>
    
    </div>
  );
}

export default App;
