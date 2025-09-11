// ---------------------- PARTIE 1 -------------------------------------------
// import { Component} from 'react'

// import MyCars from './compenents1/MyCars'
// import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// class App extends Component {

//   state = {
//     titre: 'Catalogue des Voitures',
//     couleur: 'green',
//   };

//   changeTitle= () => {

//       this.setState({
//         titre : 'OOOOOOOOOOOOOOOOOOOOOOOH'
//       })
//   }
//   changeViaParam= (title) => {

//       this.setState({
//         titre : title
//       })
//   }
//   changeViaBind= (title) => {
//       this.setState({
//         titre : title
//       })
//   }
//   changeViaInput= (e) => {
//       this.setState({
//         titre : e.target.value
//       })
//   }




//   render(){
//     return (
//       <div>
//       <MyCars  titre={this.state.titre} 
//           color = {this.state.couleur}
//            />
//             <button onClick={this.changeTitle}>Changer le titre</button>
//             <button onClick={() => this.changeViaParam('ParametreTest')}>Changer le titre</button>
//             <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Changer le titre avec Bind</button>
//             <input type="text" onChange={this.changeViaInput} value ={this.state.titre}/>

//       </div>
//     )
      
//   }
// }

// export default App;


// ---------------------- PARTIE 2 -------------------------------------------
