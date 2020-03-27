import React from "react";
import "./style.css";

// function Wrapper(props) {
//   return <main className="wrapper" style={{ backgroundImage: `url(${props.theme})` }} {...props} />;
// }
function Wrapper(props) {
  const imageUrl = require(`../../images/${props.theme}.jpg`)
  return <main className="wrapper" style={{ backgroundImage: `url(${imageUrl})` }} {...props}/>
}

export default Wrapper;
