import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react'
import { gg } from '../Home/styles.css'
// '../Home/styles.css'
// const tt = require('../assets/image/imgplace.svg')
// const gg = require('./tcc.png')// need image / url loaders
class Home extends Component {

  render() {
    return (
      <div>
     <Grid centered columns={2}>
      <Grid.Column>
          <Image src='https://i.imgur.com/xfJDww4.jpg' />

      </Grid.Column>  
     </Grid>
     <Grid centered columns={5}>
        <Grid.Column>
          <Button.Group>
            <Button labelPosition='left' icon='left chevron' content='Back' />
            <Button labelPosition='right' icon='right chevron' content='Forward' />
          </Button.Group>
        </Grid.Column>
     </Grid>
     </div>
    );
  }
}

export default Home;