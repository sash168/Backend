require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
// const gitApi = {
//     "message": "Not Found",
//     "documentation_url": "https://docs.github.com/rest",
//     "status": "404"
// };

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hi please login</h1>')
})

// app.get('/git', (req, res) => {
//     res.json(gitApi);
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})