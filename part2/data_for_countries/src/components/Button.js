import React from 'react';

const Button = ({name,clickHandle}) =>(
    <button name ={name} value = {name} onClick={clickHandle}>
        show
    </button>
  )

export default Button;