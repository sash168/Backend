import express from 'express';
// const express = require('express')
const app = express()
const port = 3000

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'Joke 1',
      description : 'This is description of joke 1'
    },
    {
      id: 2,
      title: 'Joke 2',
      description : 'This is description of joke 2'
    },
    {
      id: 3,
      title: 'Joke 3',
      description : 'This is description of joke 3'
    },
    {
      id: 4,
      title: 'Joke 4',
      description : 'This is description of joke 4'
    },
    {
      id: 5,
      title: 'Joke 5',
      description : 'This is description of joke 5'
    }
  ]
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})