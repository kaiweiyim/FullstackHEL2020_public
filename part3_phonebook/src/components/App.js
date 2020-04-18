import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import Filter from './Filter'
import PhoneService from './../services/PhoneService'
import Notification from './Notification'


const App = () => {
  const [ newSearch, setSearch] = useState('')
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ msg, setMsg] = useState(null)

  
  useEffect(() => {
    PhoneService
    .getAll(newSearch)
    .then(Persons => {
      console.log(Persons)
      setPersons(Persons)
    })
  },[newSearch])
  

  const addName =(event) => {
    event.preventDefault()

    if (newName !=='' && newNumber !=='') {
        const personObj ={'name':newName,'number':newNumber}
        
        const person = persons.find(p => p.name === newName)
        if (person === undefined) {
            //add to server
          PhoneService
          .addPerson(personObj)
          .then(response => {
            if (response.status !== 200){
              setMsg(`${response.data.error}`)
            } else{
              setPersons(persons.concat(response.data))
              setNewName('')
              setNewNumber('')
              setMsg(`Added ${newName}`)
            }
            setTimeout(() => {
              setMsg(null)
            }, 5000)
            
          })

        } else{
          const result = window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)
          if (result) {
            // edit existing number
            const personObj ={'name':newName,'number':newNumber,'id':person.id}
            PhoneService
            .EditPerson(personObj)
            .then(response => {
              if (response.status !== 200){
                setMsg(`${response.data.error}`)
              } else{
              setPersons(persons.map(p => p.id !== person.id ? p : personObj))
              setNewName('')
              setNewNumber('')
              setMsg(`Updated ${newName} number`)
              setTimeout(() => {
                setMsg(null)
            }, 5000)}
            })
            .catch( error => {
              setMsg(error)
              setTimeout(() => {
                setMsg(null)
            }, 5000)

            })
            

          }
          
        }
        
    }

  }
  
  const onClickDelete = (event) => {
    const name = event.target.value
    const result = window.confirm(`Delete ${name} ?`)
    if (result){
      const id = persons.find(p => p.name === name).id
      PhoneService
      .deletePerson(id)
      const PersonsObj = persons.filter(p => Number(p.id) !== Number(id) )
      setPersons(PersonsObj)
      setMsg(`Deleted ${name} `)
      setTimeout(() => {
        setMsg(null)
      }, 5000)
    }
    

  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    const s = event.target.value
    setSearch(s)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={msg}/>
      
        <Filter newSearch = {newSearch} handleSearchChange = {handleSearchChange} />

        <PersonForm addName = {addName} newNumber = {newNumber} newName = {newName} 
        handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange}/>
        
        <Numbers persons = {persons} onClickDelete = {onClickDelete}/>
      
    </div>
  )
}

export default App