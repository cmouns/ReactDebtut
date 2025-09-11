import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {
    state = {
        catalogueVoiture: [
            {
                marque : 'Ford',
                couleur: 'Vert',
                annee : '2012'
            },
            {
                marque : 'Toyota',
                couleur: 'Rouge',
                annee : '2100'
            },
            {
                marque : 'Renault',
                couleur: 'Bleu',
                annee : '2013'
            },
        ]
        } 
    
addTenYears= () => {
    const updateState = this.state.catalogueVoiture.map((param) => {
        return param.annee -=10;
    })
    this.setState({
        updateState
    })
}
    

        
    

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                    
                <Car year= {this.state.catalogueVoiture[0].annee} color={this.state.catalogueVoiture[0].couleur}>{this.state.catalogueVoiture[0].marque}</Car>
                <Car year= {this.state.catalogueVoiture[1].annee} color={this.state.catalogueVoiture[1].couleur}>{this.state.catalogueVoiture[1].marque}</Car>
                <Car year= {this.state.catalogueVoiture[2].annee} color={this.state.catalogueVoiture[2].couleur}>{this.state.catalogueVoiture[2].marque}</Car>
            <button onClick={this.addTenYears}> + 10 ans </button>
            </div>
           
        )
    }
}

export default Mycars