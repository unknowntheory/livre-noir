import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';


class Upload extends Component {

  render(){
    return(
      <Form>
        <Form.Group widths={6}>
          <Form.Input fluid label ='Name' placeholder='FirstName, FullName or NickName ;)'/>
        </Form.Group>
      </Form>


    )
  }
}

export default Upload;
