import { Component } from 'react';
import Totobis from './Totobis.jsx';

class Mamanbis extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = msg => this.setState({ messageMaman: msg , disabled: false});
    reponseToto = msg => this.setState({ messageToto: msg})
    
    render() {
        return (
            <div>
                <h1>Maman partie 2</h1>
                <button 
                    onClick={() => this.ordreMaman("Va ranger ta chambre")}
                >Order de la mère2</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <Totobis    
                    name="Toto2"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                    stateButton={this.changeStateButton}
                />
            </div>
        )
    }
}

export default Mamanbis;