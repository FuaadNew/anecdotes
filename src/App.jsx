import { useState } from 'react'

const Button = ({text, onClick}) =>{
  return(
    <button onClick = {onClick}>{text}</button>
  )
}

const MostVotes= ({anecdote, vote}) =>{
  return(
    <div>
      <h1>Annecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  )

}


const Anectdote = ({anecdote, vote}) =>{
  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  )

}


const App = () => {
 
    
  const anecdotes = {
    'If it hurts, do it more often.':0,
    'Adding manpower to a late software project makes it later!':0,
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.':0,
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.':0,
    'Premature optimization is the root of all evil.':0,
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.':0,
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.':0,
    'The only way to go fast, is to go well.':0
}
  const N = Object.keys(anecdotes).length
  const nextAnecdote = () =>{
    setSelected(Math.floor(Math.random() * N))
  }

  
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes)
  
  const selectedAnnecote = Object.keys(anecdotes)[selected]
  const vote = () =>{
    const copy = {...votes}
    copy[selectedAnnecote] += 1
    setVotes(copy)
  }
  const maxVoteCount = Math.max(...Object.values(votes))
  
  
    
  const mostVotedAnecdote = Object.keys(votes).find(key => votes[key] === maxVoteCount)
     
  
  return (

    <div>

      <Anectdote anecdote={selectedAnnecote} vote = {votes[selectedAnnecote]}></Anectdote>
      
      <Button onClick = {vote} text = "vote"></Button>
      <Button onClick = {nextAnecdote} text = "next anecdote"></Button>
      <MostVotes anecdote = {mostVotedAnecdote} vote = {maxVoteCount}></MostVotes>
    </div>
  )
}

export default App