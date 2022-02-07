import React from "react";

const Input = ({onChangeEvent , onEnterEvent, value }) => {

  const onSelfKeyPress = (e) => {

    if (e.key === 'Enter') {
      onEnterEvent();
    }
  }

  return <input value={value ?? ''} onChange={(e) => onChangeEvent(e.target.value)} onKeyPress={onSelfKeyPress} type="text"/>
}

export default Input