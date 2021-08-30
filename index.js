const express = require('express')
const app =express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dpfprtus:kk7210@cluster0.xhtgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World'))
app.listen(port, () => console.log(`Example app on port ${port}`) )