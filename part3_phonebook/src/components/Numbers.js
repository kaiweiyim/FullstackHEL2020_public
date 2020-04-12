import React from 'react'
import Number from './Number'

const Numbers = ({persons,onClickDelete}) => (
    <>
    <h2>Numbers</h2>
      <>
        {persons.map(person =>
          <Number key = {person.name} 
          name ={person.name}  
          number = {person.number} 
          onClickDelete = {onClickDelete}/>
          )}
      </>
    </>
)
    

export default Numbers;
