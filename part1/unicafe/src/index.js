import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => (
  <button onClick = {onClick}>
    {text}
  </button>

)

const Title1= ({text}) =>(
  <h1>{text}</h1>
)

const Title2= ({text}) =>(
  <h2>{text}</h2>
  )


const Statistic = ({text,value}) => {
  return (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
  )
}
  
const Statistics = (props) => {

  const all = props.good + props.bad + props.neutral
  const avg = (props.good - props.bad) / all
  const positive = props.good / all *100 + ' %'

  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return(
      <table>
        <tbody>
          <Statistic text ='good' value = {props.good}/>
          <Statistic text ='neutral' value = {props.neutral}/>
          <Statistic text ='bad' value = {props.bad}/>
          <Statistic text ='all' value = {all}/>
          <Statistic text ='average' value = {avg}/>
          <Statistic text ='positive' value = {positive}/>
          </tbody>
      </table>
    )
  }
}
  

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }


  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Title1 text = 'give feedback' />
      <Button onClick = {handleGoodClick} text='good'/>
      <Button onClick = {handleNeutralClick} text='neutral'/>
      <Button onClick = {handleBadClick} text='bad'/>
      <Title2 text = 'statistics'/>
      <Statistics good = {good} neutral = {neutral} bad ={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)