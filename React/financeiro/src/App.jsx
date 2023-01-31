import React from 'react';
import { Resume } from './Components/Resume';
import { Header } from './Components/Header';
import './index.css';


function App() {
  const entradas = 1000
  const entradasResume = entradas
    .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  const saidas = 510;
  const saidasResume = saidas
    .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  const saldo = entradas-saidas;
  const saldoResume = saldo
    .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});


  return (
    <React.Fragment>
      <Header />
      <div style={{display: 'flex'}}>
        <Resume title='Entradas' resumeValue={entradasResume} />
        <Resume title='Saídas' resumeValue={saidasResume} />
        <Resume title='Saldo' resumeValue={saldoResume} />
      </div>
    </React.Fragment>
  )
}

export default App
