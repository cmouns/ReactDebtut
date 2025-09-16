import React, { Component } from 'react'
import Toto from './Toto';

class Maman extends Component {

    state={
        messageMaman: null,
        messageToto: null
    }
    
ordreMaman = () => {
     this.setState({messageMaman : 'Va ranger ta chambre'});
           {console.log(this.state)}
}

 reponseToto = () => {
     this.setState({messageToto : 'Non !'});
}

render() {
  return (
    <div>
      <h1>Maman</h1>
      <button onClick={this.ordreMaman}>Ordre de la maman</button>
      <p>{this.state.messageMaman}</p>
      <Toto name="Toto" stateParent={this.state} reponseToto = {this.reponseToto}/>

    </div>
  )
    }
}

export default Maman
