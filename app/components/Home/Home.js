import React, { Component } from 'react';
import { Grid, Image, Button, Reveal } from 'semantic-ui-react'
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
         <Reveal animated='move' instant>
            <Reveal.Content visible>
                <Image src='https://images.unsplash.com/photo-1456940769015-a80506d591da?ixlib=rb-0.3.5&ixid
                =eyJhcHBfaWQiOjEyMDd9&s=ebbef846ccb2a163ecabb7ed626dd
                42e&auto=format&fit=crop&w=1952&q=80' />
          </Reveal.Content>
            <Reveal.Content hidden>
            <Image src='https://i.imgur.com/xfJDww4.jpg' />
          </Reveal.Content>
        </Reveal>
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


/*
~notes~
  -need to replace starter pic: classic book cover
  -need to crop size to constant size global
  -set reveal to only activate on first page

*/