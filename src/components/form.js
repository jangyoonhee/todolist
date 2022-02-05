import React from 'react';
import '../css/basic.css';
import Button from "./button/index";
import Input from "./input/index";

const Form = ({onChange, onAddEvent , onAddClick}) => {
  return (
    <div className="form" >
      <Input className="Input" onChangeEvent = {onChange} onEnterEvent={onAddEvent}/>
      <Button className="Button" children={'ADD'} colorName="blue" onClickEvent={onAddClick} >
      </Button>
    </div>
  );
};
  
export default Form;

