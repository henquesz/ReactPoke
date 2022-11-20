import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";

import './CadOne.css'

export class CadOne extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    return <Link to='/'></Link>
  }
  handleSubmit(event) {
    localStorage.setItem("name", this.state.value);
    
  }
  render() {
    if(localStorage.getItem("name") != null){
      return <Navigate to='/CadastroTwo'></Navigate>
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <div class="container">
          <img src="./pokelogo.png" className='pokeimg'/>
          <h2 className='namet'>Primeiro, nos diga o seu nome de treinador:</h2>
          <input type="text" placeholder="Your name" value={this.state.value} onChange={this.handleChange}></input>
          <div>
          <input type="submit" value="Enviar" className='button' ></input>
          </div>
      </div>
    </form>
    
    )
  }
}
export default CadOne;

