import React from 'react';
import '../css/basic.css';
import Button from "./button/index";
import Input from "./input/index";

const Form = ({value, onChange, onKeyPress}) => {
  return (
    <div className="form" >
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <Button onClick={() => {alert('Hello')}} colorName="blue">
        추가1
      </Button>
    </div>
  );
};
  
export default Form;

