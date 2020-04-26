import React from 'react'
import {connect } from 'react-redux'
import {voteAction} from './../reducers/anecdoteReducer'
import {setNotification} from './../reducers/notificationReducer'




const AnectodeList = (props) => {
    
    const anecdotes = () => {
      if (props.filter === "") {
        return props.anecdote
      }else{
        return props.anecdote.filter(a => a.content.includes(props.filter))
      }


    }

    const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    console.log(anecdote.content)
    props.voteAction(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`,5)
    
  }

    return (
        <div>
            {anecdotes().map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
            )}
        </div>
        

    )
}

const mapDispatchToProps = {
  voteAction,
  setNotification
}


const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state)
  return {
    anecdote: state.anecdote,
    filter: state.filter
  }
}

const ConnectedAnectodeList = connect(mapStateToProps,mapDispatchToProps)(AnectodeList)

export default ConnectedAnectodeList