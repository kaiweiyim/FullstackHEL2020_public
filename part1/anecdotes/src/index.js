import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({onClick,text}) => (
  <button onClick = {onClick}>{text}</button>
  )
  


const Paragraph = ({text}) => {
  return (
  <p>{text}</p>
  )
}


const Title = ({text}) => (
  <h1>{text}</h1>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const zeros = Array.apply(null,new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0)
  const [allVotes, setVotes] = useState(zeros)
  const [mostVotes, setMostVotes] = useState(0)
  const anecdote = props.anecdotes

  const handleNextClick = () => {
    const max = 6;
    const rand = Math.floor(Math.random() * Math.floor(max));
    setSelected(rand)
    if (allVotes[selected]+1 > allVotes[mostVotes]){
      setMostVotes(selected)
    }
    }
  

  const handleVoteClick = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setVotes(copy)
    if (allVotes[selected]+1 > allVotes[mostVotes]){
      setMostVotes(selected)
    }
    }
  

  return (
    <div>
      <Title text= 'Anecdote of the day'/>
      <Paragraph text ={anecdote[selected]}/>
      <Paragraph text = {'has '+ allVotes[selected] + ' votes'} />
      <Button onClick = {handleNextClick} text = 'next anecdote'/>
      <Button onClick = {handleVoteClick} text = 'vote'/>
      <Title text= 'Anecdote with the most votes'/>
      <Paragraph text ={anecdote[mostVotes]}/>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)