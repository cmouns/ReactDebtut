import React from 'react'

const Welcome = () => {

    const Bonjour = () => {
        console.log("Bonjour");
    } 

    const Bonsoir = (param) => {

        console.log(param);
    }

  return (
    <div>
      <button onClick={Bonjour}>Invoquer une fonction</button>
      <button onClick= {() => Bonsoir("Bonsoir")}>Invoquer une fonction</button>
      <button onClick= {() => console.log("AMINEEEEEEEEEEEEEEEEEEE")}>Invoquer une fonction</button>
    </div>
  )
}

export default Welcome
