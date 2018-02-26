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

  let data = req.body.file.split(',')[1]
  // axios.post('https://api.imgur.com/3/image',data,{
  //   headers: {'Authorization' : `Bearer ${accessToken}`},
  //   // auth:{Bearer: accessToken},
  //   name:'test'
  // }).then((resp)=>{
  //   console.log(resp,'resp')
  // }).catch((error)=>{
  //   if (error.response) {
  //     console.log(error.response.data,'data');
  //     console.log(error.response.status,'status');
  //     console.log(error.response.headers,'headers');
  //   } else if (error.request) {
  //     console.log(error.request,'request');
  //   } else {
  //     console.log('Error', error.message);
  //   }
  // })
})


//
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/1337');
//
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('connected');
// });
//




app.listen(3000,()=>console.log('good things happen on port 3000'))
