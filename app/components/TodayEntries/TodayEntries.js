import React from 'react';
import { Grid, Image} from 'semantic-ui-react'

const TodayEntries = () => {
  return (
    <Grid centered>
      <Grid.Row columns={4}>
        <Image src='https://i.imgur.com/r4zPuEF.jpg' />
      </Grid.Row>
    </Grid>
  );
};

export default TodayEntries;

/*
set up grid for images
load image from glary
https://i.imgur.com/r4zPuEF.jpg stock img
*/