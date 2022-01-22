import React from 'react';
import '../css/basic.css';
import Button from "./button/index";
import Input from "./input/index";

const Form = ({value, onChange, onKeyPress}) => {
  
  return (
    <div className="form">
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <Button colorName="blue">
        추가
      </Button>
    </div>
  );
};

export default Form;