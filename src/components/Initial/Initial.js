import React, { Component } from 'react';
import './Initial.css';

import { Link } from 'react-router-dom'

export class Initial extends Component {
  render() {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    return(
    <div class="container">
        <img src="./pokelogo.png" className='pokeimg'/>
        {/* <h1 className='title'>finder</h1> */}
        <button className='button'><Link to='/CadastroOne'>Vamos lá</Link></button>
    </div>
    )
  }
}
export default Initial;

