import React from "react";
import '../../css/button.css'

const Button = ({ children, colorName}) => {
  return <button className={colorName}>{ children }</button>
}

export default Button