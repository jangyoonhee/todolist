import React from 'react';
import '../css/basic.css';
import Button from "./button/index";
import Input from "./input/index";

const Form = ({value, onChange, onAddEvent}) => {
  return (
    <div className="form" >
      <Input value={value} onChange={onChange} onEnterEvent={() => onAddEvent(value)}/>
      <Button onClick={() => onAddEvent(value)} colorName="blue">
        추가
      </Button>
    </div>
  );
};
  
export default Form;

