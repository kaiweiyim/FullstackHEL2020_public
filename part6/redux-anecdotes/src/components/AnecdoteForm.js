import React from 'react'
import {connect } from 'react-redux'
import {addAnectodeAction } from './../reducers/anecdoteReducer'
import {setNotification} from './../reducers/notificationReducer'


const AnectodeForm = (props) => {

    const addAnectode = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('content', content)
        props.addAnectodeAction(content)
        props.setNotification(`you added '${content}'`,5)
      }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnectode}>
                <div><input name ="anecdote"/></div>
                <button type="submit">create</button>
            </form>
      </div>
    )
}


const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
      anecdote: state.anecdote,
      filter: state.filter
    }
  }

const mapDispatchToProps = {
    addAnectodeAction,
    setNotification

}


const ConnectedAnectodeForm = connect(mapStateToProps,
    mapDispatchToProps)(AnectodeForm)

export default ConnectedAnectodeForm
