import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Maman from './components/Maman';
import Mamanbis from './components/Mamanbis'
import Form from './components/Form';


class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'

  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <Maman>
          
        </Maman>
        <Mamanbis>
          
        </Mamanbis>
        <Form />
      </div>


    )
  }
}

export default App;