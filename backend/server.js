require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()


// middleware

// Allows use of req.body
app.use(express.json())

// Use incoming request to log path and method
app.use((req, res, next) => {
    //Log request path and the method used (GET, POST, UPDATE, DELTE)
    console.log(req.path, req.method)
    // Go to the next use statement
    next()
})


// routes
app.use('/api/workouts',workoutRoutes)

//connect to mongo db
try{
    mongoose.connect(process.env.MONGO_URI)
    .then(
        app.listen(process.env.PORT, () => {
            console.log('listening on port ', process.env.PORT)
        })
    )
    
}catch(error) {
    console.log(error)
}


// listen for reuqests
