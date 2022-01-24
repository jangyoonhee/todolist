import React from "react";
import '../../css/button.css'
/*
1.추가버튼
2.날짜이동 좌.우
*/
const Button = ({ children, colorName, onClick}) => {

  const handleClick = () => {
    onClick();
  }

  return <button onClick={handleClick} className={colorName}>{ children }</button>
}

export default Button