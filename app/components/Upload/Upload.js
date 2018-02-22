import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import ImageUpload from './../DropZone/ImageUpload.js';

class Upload extends Component {

  render(){
    return(
      <div>
        <Form>
          <Form.Group widths={6}>
            <Form.Input fluid label ='Name' placeholder='FirstName, FullName or NickName ;)'/>
          </Form.Group>
        </Form>
        <ImageUpload />
      </div>



    )
  }
}

export default Upload;
