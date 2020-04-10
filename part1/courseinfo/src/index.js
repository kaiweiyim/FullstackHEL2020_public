import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const part1 = props.parts[0]
  const part2 = props.parts[1]
  const part3 = props.parts[2]
  return (
    <div>
      <Part part = {part1} />
      <Part part = {part2} />
      <Part part = {part3} />
    </div>
  )
}

const Total = (props) => {
  const part1 = props.parts[0]
  const part2 = props.parts[1]
  const part3 = props.parts[2]

  return (
    <>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </>
  )
}

const Part = (props) => {
  const part = props.part
  return (
    <>
      <p>{part.name} {part.exercises}</p>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total parts = {course.parts}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))