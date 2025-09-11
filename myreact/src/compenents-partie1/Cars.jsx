import React from 'react'
import Wrapper from './Wrapper.jsx';

const Cars = ({children, color}) => {

      const myColor = color ? color : " Non précisée";

  return children &&(
    <Wrapper>
      <p> Marque : {children} </p>
      <p> Couleur : <span style={{color:color}}>{myColor}</span></p>
    </Wrapper>
  
  )
}

export default Cars
