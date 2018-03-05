//save function

// need a function to save to db
//schema
var uploadSchema = mongoose.Schema({
  name: String,
  title: String,
  description: String,
  picture: String,
  date: { type: Date, default: Date.now },
});


var Image = mongoose.model('Image', uploadSchema);


Image.save((err,data)=>{
  if(err){
    console.log(err,'err');
  } else {
    console.log('saved',data);
  }
})
