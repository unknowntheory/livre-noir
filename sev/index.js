const express =  require("express")
const app =  express()
const bodyParser = require('body-parser')
const axios = require('axios')
require('dotenv').config()



app.use(bodyParser.urlencoded({ limit:"50mb",extended: false }))
app.use(bodyParser.json({limit: "10mb"}))
const clientId = process.env.API_ClientId
const accessToken = process.env.API_AccessToken



app.get('/', (req, res) => res.send('Hello World!'))
app.post('/upload', (req, res) =>{
  let contents = req.body.information;
  console.log(contents);

})






app.listen(3000,()=>console.log('good things happen on port 3000'))
