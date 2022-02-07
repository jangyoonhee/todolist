import React from 'react';
import '../css/basic.css';
import Button from "./button/index";
import Input from "./input/index";

const Form = ({onChange, onAddEvent, value}) => {
  return (
    <div className="form" >
      <Input className="Input" onChangeEvent = {onChange} onEnterEvent={onAddEvent} value={value}/>
      <Button className="Button" children={'ADD'} colorName="blue" onClickEvent={onAddEvent} >
      </Button>
    </div>
  );
};
  
export default Form;

