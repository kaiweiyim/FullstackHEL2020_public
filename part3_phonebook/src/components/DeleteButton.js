import React from 'react'

const DeleteButton = ({name,onClickDelete}) =>(

    <button value = {name} onClick = {onClickDelete}>delete</button>

)

export default DeleteButton