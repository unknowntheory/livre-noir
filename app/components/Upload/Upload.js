import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
const axios = require('axios');

class Upload extends Component {
  constructor(props){
    super(props);
      this.state = {
        file:[]
      }

  }

  handleChange = (e,{name, value}) => this.setState({[name] : value})
  handleFileChange = (e) => this.setState({file:e.target.files[0]})
  handleSubmit = (e) =>{
    e.preventDefault();
    let userData = {
      name: this.state.name,
      title: this.state.title,
      description: this.state.desc,
      file: this.state.file
    }
    console.log(userData);
    axios.post('/upload',{information:userData})
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error,'err');
    })
  }

  render(){
    const { name = '', title = '', desc = '' } = this.state
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input name='file' onChange={this.handleFileChange} type="file" width={6}/>
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
