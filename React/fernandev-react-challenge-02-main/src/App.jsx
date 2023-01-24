import { login } from './utils';
import './index.css';
import React from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [requesting, setRequesting] = React.useState(false);
  const [error, setError] = React.useState('');

  function handleEmail(event){
    setEmail(event.target.value);
  }

  function handlePassword(event){
    setPassword(event.target.value);
  }

  function handleSubmit(){
    setError('');
    setRequesting(true);
    login({email, password})
      .then((message) => {
        alert(message.message);
      })
      .catch((errorMsg) => {
        setError(errorMsg);
      }).finally(() => {
        setRequesting(false);
      })
  };



  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className='errorMessage'>{error.message}</div>}
        
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input value={email} onChange={handleEmail} id={'email'} type={'email'} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input value={password} onChange={handlePassword} id={'password'} type={'password'} />
        </div>

        <div className='button'>
          <button disabled={email==='' || password.length < 6 || requesting == true} onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}
