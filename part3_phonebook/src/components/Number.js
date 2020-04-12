import React from 'react'
import DeleteButton from './DeleteButton'


const Number = ({name,number,id,onClickDelete}) => (
    <p>
        {name} {number} <DeleteButton name={name} id={id} onClickDelete ={onClickDelete}/>
    </p>

)
    


export default Number;