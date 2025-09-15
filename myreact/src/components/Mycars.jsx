import { Component } from 'react'
import Car from './Cars'
import Welcome from './Welcome'

class Mycars extends Component {
    state = {
        catalogueVoiture: [
            {
                marque : 'Ford',
                couleur: 'Vert',
                annee : '2024'
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

getAge = (annee)=> {
const now = new Date().getFullYear();
const age= now- annee;

let frenchYearStr = "";
    if (age === 1) {
        frenchYearStr= "an";
    }else if (age > 1) {
        frenchYearStr = "ans";
    }else if (age <= 0){
        frenchYearStr = "Pas encore sortie";
         return `${frenchYearStr}`;
    }
    return `${age} ${frenchYearStr}`;
}

    render() {
        
        return (
            <div>
            <h1>{this.props.title}</h1>
            <button onClick={this.addTenYears}> + 10 ans </button>
            {
                this.state.catalogueVoiture.map(({marque, couleur, annee}, index) => (
                <div key={index}>
                    <Car 
                    year={annee}
                    color={couleur}
                    age={this.getAge(annee)}
                    >
                    {marque}
                    </Car>
                </div>
                ))
            }
            <Welcome></Welcome>
            </div>
        )
        
    
    }
}


export default Mycars