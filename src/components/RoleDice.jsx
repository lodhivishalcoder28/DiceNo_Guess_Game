import React from 'react'
import { useState } from 'react';

import styled from 'styled-components';
const RoleDice = ({roleDice,currentDice}) => {
    
    
  return (
    
    <DiceContainer>
        <div className='dice' 
        onClick={roleDice}>
            <img src={`/dice_${Number(currentDice)}.png`} alt="Dice 1" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
margin-top: 48px;
display:flex;

flex-direction: column;
align-items: center;

p{
    font-size: 22px;

}
.dice{
    cursor: pointer;
}
`;