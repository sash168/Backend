import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'; 

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then(res => { 
      setJokes(res.data)
    }).catch((e) => {
      console.log(e)
    })
  })

  return (
    <>
      <h1>Jokes App</h1>
      <h2>Jokes : {jokes.length}</h2>
      
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.description}</p>
        </div>
      ))}
    </>
  ) 
}

export default App
