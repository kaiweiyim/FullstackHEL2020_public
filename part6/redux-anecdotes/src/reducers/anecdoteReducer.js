import anecdoteService from './../services/anectodes'

const initialState = []

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data
    case "VOTE":
      const id = action.data.id
      const anectodeToChange = state.find(a => a.id === id)
      const changedAnectode = {...anectodeToChange, votes: anectodeToChange.votes +1}
      return state.map(a => a.id !== id ? a : changedAnectode).sort((a,b)=>b.votes-a.votes)
    case "ADD":
      const data = action.data
      return state.concat(data).sort((a,b)=>b.votes-a.votes)
    default:
      return state
  
    }
  
}

export const voteAction=(anectode)=>{
  return async dispatch => {
    const votedAnectode = await anecdoteService.voteAnecdote(anectode)
    dispatch({
      type: "VOTE",
      data: votedAnectode
    })
  }
}


export const addAnectodeAction=(content)=>{
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    console.log(newAnecdote)
    dispatch({
      type:"ADD",
      data:newAnecdote
    })
  }
}
  


export const initializeAnecdotes=()=>{
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type:"INIT_ANECDOTES",data:anecdotes}
    )
  }
}  



export default anecdoteReducer