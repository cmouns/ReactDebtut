import React, {Component} from 'react'
import Image from './Image'

class Form extends Component {
    state ={
        username:'',
        color:'',
        colors: ["","red","blue","green","black","pink"],
        comment:'',
    }

    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
        // {console.log(this.state)}
    }

    handleColor = e => {
        this.setState({
            color: e.target.value
        })
    }

    handleComments = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmitForm = e => {
        e.preventDefault();
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Commentaire: ${this.state.comment}`)
        }
    

    render() {
        return (
            <div>
            <Image color= {this.state.color} height ="100"></Image>
            <h1>Commentaire</h1>
            <textarea value={this.state.comment} onChange={this.handleComments}></textarea>

            <form onSubmit={this.handleSubmitForm}>
                <div>
                    <label>Pseudo</label>
                    <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                </div>
                
                <div>
                    <label>Couleur</label>
                    <select value={this.state.color} onChange={this.handleColor}>
                       
                        {
                            this.state.colors.map((color, index) => {
                                return <option key={index} value={color}>{color}</option>

                            })
                        }
                    </select>
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
            </div>
        )
    }
  
}

export default Form
