import React, { Component } from 'react'
class App extends Component {

 mensagem = () => {
     return <h2>Hello world, I'm a cherry bomb</h2>
   } 

   escolhaMensagem = (msg) => {
     return <h2>{msg}</h2>
   }

   dobro = (numero) => {
     return <h2>O dobro do número: {numero * 2}</h2>
   }

   //numero = (num) => {
     //if(num >= 0){
       //return <h3>Número positivo</h3>
     //}else{
       //return <h3>Número negativo</h3>
    // }
   //}

   render(){
    return(
    <div>
      {this.mensagem()}
      {this.dobro(10)}
    </div>
    )
   }
  }

   export default App
