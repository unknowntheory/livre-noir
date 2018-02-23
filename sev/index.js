const express =  require("express")
const app =  express()
const bodyParser = require('body-parser')
const axios = require('axios')
require('dotenv').config()

app.use(bodyParser.urlencoded({ limit:"50mb",extended: false }))
app.use(bodyParser.json({limit: "10mb"}))
const clientId = process.env.API_ClientId
const accessToken = process.env.API_AccessToken

// console.log(clientId,'yooo')

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/upload', (req, res) =>{
//post to imgur API
//need image
//need album name noir
//title str
//type?
  let data = req.body.file.split(',')[1]
 // console.log(data,'data');
 // console.log(data.split(',')[1],'hmm')
  axios.post('https://api.imgur.com/3/image',data,{
    headers: {'Authorization' : `Bearer ${accessToken}`},
    // auth:{Bearer: accessToken},
    name:'test'
  }).then((resp)=>{
    console.log(resp,'resp')
  }).catch((error)=>{
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data,'data');
      console.log(error.response.status,'status');
      console.log(error.response.headers,'headers');
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request,'request');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  })


// console.log(req.body,'req body<<<<<<<')

})




app.listen(3000,()=>console.log('good things happen on port 3000'))
