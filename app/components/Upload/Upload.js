import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import ImageUpload from './../DropZone/ImageUpload.js';

class Upload extends Component {

  render(){
    return(
      <div>
        <Form>
          <ImageUpload />
          <Form.Group widths={6}>
            <Form.Input fluid label ='Name' placeholder='FirstName, FullName or NickName ;)'/>
          </Form.Group>
          <Form.Input fluid label='Title' placeholder='Title' width={6}/>
          <Form.TextArea label='Description' placeholder='blurb' width={6}/>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>



    )
  }
}

export default Upload;
