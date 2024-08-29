const express = require('express')
const port = 3000
const app = express()
app.use(express.json());


app.post('/todo' ,(req, res) => {

})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {

})

app.listen(port, () => {
    console.log(`listeing on port: ${port}`)
})


// step 1 basic express boilerpate code
// step 2 json middleware
// step 3 zod validation