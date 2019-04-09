import React, { useState } from 'react'
import { Button, Grid, Container } from 'semantic-ui-react';
import CatCard from './CatCardWHooks';

 const CatContainerWHooks = (props) => {
   const [cats, setCats] = useState([]);
   const [count, setCount] = useState(0);

  function addCat(){
    const newCats = [...cats];
    newCats.push(<CatCard key={count} />);
    setCats(newCats);
    setCount(count+1);
  }

    return(
      <Container>
        <Grid padded centered column={3}>
          {cats}
          <Button icon='plus' onClick={() => addCat()} />
        </Grid>
      </Container>
    );

}

export default CatContainerWHooks;
