const initialState = ""

const filterReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    let newState

    switch (action.type) {
        case "FILTER":
            newState = action.data.content
            return newState
        default:
            return state
    
    }
            
}

export const filterAction=(content)=>(
    {type:"FILTER",data:{content}}
  )
  

export default filterReducer