import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ItemListContainer from '../containers/ItemListContainer';


function Home() {
  return (
    <div>
        <Box width="100%">
          <img width="100%" src='http://cdn.shopify.com/s/files/1/0356/2091/3289/collections/Banner-Licores_1024x.jpg?v=1597790687' alt='licores'/>
          <Typography style={{margin:'50px', textAlign:'center'}} variant='h2'>
            Nuestros Productos
          </Typography>
        </Box>
        <ItemListContainer />
    </div>
  );
}

export default Home;