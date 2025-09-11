import { Component} from 'react'
import MyHeader from './MyHeader'
import Cars from './Cars'


class MyCars extends Component {

  state ={
    cars:["Mercedes","Audi","Peugeot"]
  }

  noCopy= () => {
    alert('NOOOOOOOOOOOOOON');
  }

  onMouseOver= (e) => {
    console.log(e);

    {
      e.target.classList.contains('styled') ? 
      e.target.classList.remove('styled') :
      e.target.classList.add('styled')
    };
  }

  render() {
    return (
      <div>
          <MyHeader  title={this.props.titre} color={this.props.color}/>
          
          <p onCopy={this.noCopy}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Amet inventore, excepturi sed natus vel assumenda consequatur minima nam ea dicta 
            accusantium in atque rerum hic iure quidem, deserunt quia explicabo!
            </p>
          {/* <h1 onMouseOver={this.onMouseOver}>test</h1> */}
          <Cars color='bleu'>{this.state.cars[0]}</Cars>
          <Cars color='rouge'>{this.state.cars[1]}</Cars>
          <Cars color='jaune'>{this.state.cars[2]}</Cars>
      </div>
    )
  }
}

export default MyCars
