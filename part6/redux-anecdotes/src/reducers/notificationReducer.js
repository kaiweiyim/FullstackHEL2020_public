
const initialState = ""

const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case "SET_NOTIFICATION":
            return action.data
        case "CLEAR":
            const newState = "" 
            return newState
        default:
            return state
    
    }
            
}

export const setNotification = (content,time) =>{
    return async dispatch =>{
        dispatch({
            type:"SET_NOTIFICATION",data:content}
          )
        const t = setTimeout(()=>{
            dispatch({type:"CLEAR",data:{}})
        },time*1000)
        let i 
        for (i=0; i < t;i++){
            clearTimeout(i)
        }
    }
        
            
}


export default notificationReducer