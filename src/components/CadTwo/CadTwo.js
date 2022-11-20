import React, { Component, useState } from 'react';
import { Navigate } from "react-router-dom";
import './CadTwo.css'

export class CadTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    localStorage.setItem("favorite type pokemon", this.state.value)
    event.preventDefault();
  }
  render() {
    if(localStorage.getItem("favorite type pokemon") != null){
      return <Navigate to='/Home'></Navigate>
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <div class="container">
          <img src="./pokelogo.png" className='pokeimg'/>
          <h2 className='nametitletwo'>Hello, {localStorage.getItem("name")}</h2>
          <h2 className='subtitle'>Agora, nos diga a sua espécie pokemon favorita:</h2>
          <input type="text" placeholder="Favorite type of Pokemon | ex: grass, fire or aqua." value={this.state.value} onChange={this.handleChange}></input>
          <input type="submit" value="Enviar" className='button' ></input>
      </div>
    </form>
    
    )
  }
}
export default CadTwo;

