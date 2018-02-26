import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import ImageUpload from './../DropZone/ImageUpload.js';
const axios = require('axios');

class Upload extends Component {
  constructor(props){
    super(props);
      this.state = {}
  }
  handleChange = (e,{name, value}) => this.setState({[name] : value})
  handleSubmit = () =>{
    this.setState({name:'',title:'',desc:''})
    let userData = {
      name: this.state.name,
      title: this.state.title,
      desc: this.state.desc
    }
    console.log(userData);
    axios.post('/upload',userData)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error,'err');
    })
    console.log(this.state,'hmm');
  }
  render(){
    const { name = '', title = '', desc = '' } = this.state
    return(
      <div>
        <ImageUpload />
        <Form onSubmit={this.handleSubmit}>

          <Form.Input fluid label='Name' name='name' value={name} placeholder='FirstName, FullName or NickName ;)' onChange={this.handleChange} width={6}/>

          <Form.Input fluid label='Title' name='title' value={title} placeholder='Title' onChange={this.handleChange} width={6}/>
          <Form.TextArea label='Description' name='desc' value={desc} placeholder='blurb' onChange={this.handleChange} width={6}/>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>



    )
  }
}

export default Upload;
