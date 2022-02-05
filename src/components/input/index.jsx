import React from "react";

const Input = ({onChangeEvent , onEnterEvent }) => {

  const onSelfKeyPress = (e) => {
    onChangeEvent(e.target.value);

    if (e.key === 'Enter') {
      onEnterEvent(e.target.value)
      e.target.value = '';
    }
  }

  return <input onKeyPress={onSelfKeyPress} type="text"/>
}

export default Input