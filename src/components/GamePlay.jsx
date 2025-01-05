import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import {Button,OutlineButton} from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const generateRandomNumber= (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);


}
const resetscore=()=>{
  setScore(0);
}
const [selectedNumber, setSelectNumber]= useState();
const [currentDice,setCurrentDice]=useState(1)
const [error, setError]=useState("");
const [showRules,setShowRules]=useState(false);
const roleDice = ()=>{
    const randomNumber=generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber)
    if(!selectedNumber){
      setError("you have not selected any number")
      return;

    } 
    setError("");

    if(selectedNumber==randomNumber){
      setScore((prev)=>prev+randomNumber);
    }
    else{
      setScore(prev=>prev-2)
    }
    setSelectNumber(undefined);
}


 
  return (
  
  <MainContainer >
    <div className='top_section'>
<TotalScore score={score}/>

<NumberSelector error={error} setError={setError}
 selectedNumber={selectedNumber}
setSelectNumber={setSelectNumber}/>
</div>
<RoleDice currentDice={currentDice} roleDice={roleDice}/>
<div className="btns">
  <OutlineButton onClick={resetscore}>
Reset
  </OutlineButton>

  <Button onClick={()=>setShowRules((prev)=>!prev)}>{
        showRules? "Hide":"Show"
        
    }
Rules
  </Button>
</div>
{showRules && <Rules/>}
  </MainContainer>
    
  )
}
 
export default GamePlay;

const MainContainer =styled.main`
padding-top: 70px;
.top_section{
  display:flex;
  justify-content: space-around;
  align-items: end;

}
.btns{
  display: flex;
  flex-direction:column;
 margin-top: 40px;
  align-items: center;
  justify-content: center;
  gap:10px;
}

`; 