import React, { useState } from 'react';
import styled from 'styled-components';

const UpperArea = styled.div`
  height: auto;
  padding-bottom: 20px;
  border-bottom: 3px solid #AAA;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
`;


function App() {

  const [ amount, setAmount ] = useState(0);
  const [ percent, setPercent ] = useState(10);

  function handleAmount (e) {
    setAmount(e.target.value);
  }

  function handlePercent (e) {
    setPercent(e.target.value);
  }


  return (
    
    <>
      <UpperArea>
        <Title>Calculadora de Gorjeta</Title>
        <p>Quanto deu a conta?</p>
        <Input type="number" value={amount} onChange={handleAmount} />
        <p>Qual a porcentagem de gorjeta?</p>
        <Input type="number" value={percent} onChange={handlePercent} />
      </UpperArea>

      {
        amount > 0 && 
        <>
          <p>Sub-total: R$ {amount}</p>
          <p>Gorjeta ({percent+"%"}): R$ {amount * (percent/100)}</p>
          <h4>Total: R$ {parseInt(amount) + (parseInt(amount) * (parseInt(percent)/100))}</h4>
        </> 
      }
      

    </>

  );
}

export default App;
