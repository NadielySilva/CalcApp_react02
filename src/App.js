import React, { Component } from 'react';
import './App.css'

export default class App extends Component{

  state={
    n1: null,
    n2: null,
    res: null,
    op: null
  };
  
  add = () =>{
    let {n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        res: n1 + n2,
        op:"+"
      })
    }else{
      this.setState({
        res: "Digite valores de entrada"
      })
    }
  };

  sub = () =>{
    let {n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        res: n1 - n2,
        op:"-"
      })
    }else{
      this.setState({
        res: "Digite valores de entrada"
      })
    }
  };

  mult = () =>{
    let {n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        res: n1 * n2,
        op:"*"
      })
    }else{
      this.setState({
        res: "Digite valores de entrada"
      })
    }
  };

  div = () =>{
    let {n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        res: n1 / n2,
        op:"/"
      })
    }else{
      this.setState({
        res: "Digite valores de entrada"
      })
    }
  };

  clear = () =>{
    let {n1, n2, res} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        n1: "",
        n2: "",
        res: 0,
        op: null
      })
    }else{
      this.setState({
        res: "Você ainda não indicou nenhum valor."
      })
    }
  };

  handleChangeN1 = (e) =>{
    this.setState({
      n1: Number(e.target.value)
    })
  };

  handleChangeN2 = (e) =>{
    this.setState({
      n2: Number(e.target.value)
    })
  };
  
  render(){
    let {res, n1, n2, op} = this.state;
    return(
      <div className='container'>
        <h1>Calculator App</h1>
        <div className='main'>
          <input onChange={this.handleChangeN1} value={n1} type='number' name='numero 1' placeholder='Digite o primeiro valor'/>
          <h2>{op}</h2>
          <input onChange={this.handleChangeN2} value={n2} type='number' name='numero 2' placeholder='Digite o segundo valor'/>
          <div>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
            <button onClick={this.mult}>*</button>
            <button onClick={this.div}>/</button>

            <button onClick={this.clear}>C</button>
          </div>
          
        </div>
        <hr></hr>
        <h2>{res}</h2>
      </div>
    )
  }
};