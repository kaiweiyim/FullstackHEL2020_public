import React from 'react'
import {connect } from 'react-redux'
import { filterAction} from './../reducers/filterReducer'

const Filter = (props) => {
    const handleChange = (event) => {
      const content = event.target.value
      props.filterAction(content)

  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}


const mapDispatchToProps = {
  filterAction
}


const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state)
  return {
    anecdote: state.anecdote,
    filter: state.filter
  }
}

const ConnectedFilter = connect(mapStateToProps,mapDispatchToProps)(Filter)

export default ConnectedFilter
