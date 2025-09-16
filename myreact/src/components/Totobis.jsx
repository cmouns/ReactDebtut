// import toto from './toto.jpg';
const Totobis = props => {
    const buttonToto = props.leState.disabled == true ? <button disabled>Réponse</button> : <button onClick={() => props.reponseTotoProps("Nooon")}>Réponse</button> ;


  return (
    <div>
        <h2>{props.name}</h2>
        {buttonToto}
        <p>{props.leState.messageToto}</p>
        {/* <img src="../../public/image/toto.jpg" alt="image de toto" /> */}

    </div>
  )
}

export default Totobis  