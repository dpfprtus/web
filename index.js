const express = require('express')
const app =express()
const port = 5000

const config = require('./config/key');


const bodyParser = require('body-parser');

const { User } = require("./models/User"); //user만든거 가져옴

app.use(bodyParser.urlencoded({extended: true})); //데이터를 분석할 수있게 함

app.use(bodyParser.json()); //application/json 파일을 분석할 수 있게


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World csy'))

app.post('/register', (req,res) =>{


  //회원가입시 필요한 정보들을 client에서 가져오면 그것들을 db에 넣어준다
  const user = new User(req.body) //body-parser를 이용해서 body정보를 받아온다
  user.save((err,doc)=>{
    if(err) return res.json({ success: false,err})
    return res.status(200).json({
      success: true
    })
  }) 
})

app.listen(port, () => console.log(`Example app on port ${port}`) )