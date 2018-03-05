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

  let data = req.body.information.file.split(',')[1]
  console.log(data,'data');
  axios.post('https://api.imgur.com/3/image',data,{
    headers: {'Authorization' : `Bearer ${accessToken}`},
    name:'test'
  }).then((resp)=>{
    let userData = req.body.information
    userData['picture'] = resp.link
    console.log(resp,'resp')
    // save to db
  }).catch((error)=>{
    if (error.response) {
      console.log(error.response.data,'data');
      console.log(error.response.status,'status');
      console.log(error.response.headers,'headers');
    } else if (error.request) {
      console.log(error.request,'request');
    } else {
      console.log('Error', error.message);
    }
  })
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
// var uploadSchema = mongoose.Schema({
//   name: String,
//   title: String,
//   description: String,
//   picture: String,
//   date: { type: Date, default: Date.now },
// });
//




app.listen(3000,()=>console.log('good things happen on port 3000'))
