import axios from 'axios'

const baseURL = '/api/persons'


const getAll = (text) =>(
    axios
    .get(baseURL)
    .then(response => {
        console.log(response.data)
        if (text !==''){
            const filteredObj = response.data.filter(person => person.name.includes(text))
            return (filteredObj)
        } else {
            return (response.data)
        }
        })
)
    

const addPerson = (person) => (
    axios
    .post(baseURL,person)
    .then(response => {
        return (response)
    })
    .catch(error => {
        return error.response
    })
)

const EditPerson = (person) =>(
    axios
    .put(`${baseURL}/${person.id}`,person)
    .then(response => (response))
    .catch(error => {
        return error.response
    })
)



const deletePerson = (id) =>{
    axios
    .delete(`${baseURL}/${id}`,{'data':{'id':id}})
    .then(response => (response.data))
}


export default {getAll,addPerson,deletePerson,EditPerson}