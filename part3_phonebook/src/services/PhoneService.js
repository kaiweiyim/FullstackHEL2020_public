import axios from 'axios'

const baseURL = '/api/persons'


const getAll = (text) =>(
    axios
    .get(baseURL)
    .then(response => {
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
        return (response.data)
    })
)

const EditPerson = (person) =>(
    axios
    .put(`${baseURL}/${person.id}`,person)
    .then(response => (response))
)



const deletePerson = (id) =>{
    axios
    .delete(`${baseURL}/${id}`,{'data':{'id':id}})
    .then(response => (response.data))
}


export default {getAll,addPerson,deletePerson,EditPerson}