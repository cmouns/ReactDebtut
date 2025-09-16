import React from 'react'


const Toto = props => {

  

  const btnReponseToto = props.stateParent.messageMaman == null ? (<button disabled>Réponse</button>) : <button onClick={props.reponseToto}>Réponse</button>;

  return (
    <div>
      <h2>Je suis {props.name}</h2>
      {btnReponseToto}
      <p>{props.stateParent.messageToto}</p>
    </div>
  )
}

export default Toto
