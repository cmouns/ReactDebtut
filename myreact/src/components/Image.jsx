import React from 'react'
// import toto from './toto.jpg'

const Image = (props) => {
  return (// return <img src={toto} alt="" />;
  <svg width="800px" height={props.height} viewBox="0 0 16 16" fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M15 1H1V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V1Z" fill={props.color}/>
<path d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z" fill={props.color}/>
</svg>)
}



export default Image;
