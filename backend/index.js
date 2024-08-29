const express = require('express')
const port = 3000
const app = express()
const {createTodo, updateTodo} = require("./types")
app.use(express.json());


app.post('/todo' ,(req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "wring input"
        })
        return;
    }
    // put it in mongodb
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "wrong inputs",
        })
        return;
    }
})

app.listen(port, () => {
    console.log(`listeing on port: ${port}`)
})


// step 1 basic express boilerpate code
// step 2 json middleware
// step 3 zod validation
// step 4 create a mongoDB schema