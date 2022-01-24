import React from "react";

const Input = ({ onChange, onEnterEvent }) => {

  const onSelfKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnterEvent()
    }
  }

  return <input onChange={onChange} onKeyPress={onSelfKeyPress} type="text" />
}

export default Input