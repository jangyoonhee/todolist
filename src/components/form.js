import React from 'react';
import '../css/basic.css';
import Button from "./button/index";
import Input from "./input/index";

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <Button colorName="blue" onClick={onCreate}>
        추가
      </Button>
      <Button colorName="red" onClick={onCreate}>
        삭제
      </Button>
    </div>
  );
};

export default Form;