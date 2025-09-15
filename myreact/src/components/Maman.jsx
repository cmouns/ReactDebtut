import React, { Component } from 'react'
import Toto from './Toto';

class Maman extends Component {

    state={
        messageMaman: null,
        messageToto: null
    }
    
ordreMaman = () => {
     this.setState({messageMaman : 'Va ranger ta chambre'});
}

render() {
  return (
    <div>
      <h1>Maman</h1>
      <button onClick={this.ordreMaman}>Ordre de la maman</button>
      <p>{this.state.messageMaman}</p>
      <Toto name="Toto" />

    </div>
  )
    }
}

export default Maman
