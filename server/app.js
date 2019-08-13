const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const cors = require('cors')
const myRoute = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', myRoute)

app.listen(port, () => {
    console.log(`server running at port ` + port)
})