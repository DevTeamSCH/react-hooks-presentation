import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';
import MagicInput from './MagicInputWHooks';

const CatCardWHooks = (props) => {
  const [name, setName] = useState('Macska');
  const [age, setAge] = useState(0);
  const [image, setImage] = useState();

  useEffect( () => {
    fetch('https://cataas.com/cat/gif?height=200',
      {mode: 'cors'})
    .then(response => response.blob())
    .then(blob => {
          console.log(blob);
          setImage(URL.createObjectURL(blob));
        });
  }, [props.key])

  return(
    <Card style={{padding: '2em', margin: '2em'}}>
      <Image src={image} />
      <Card.Content>
        <Card.Header>
        <MagicInput text={name} name='name'
                    onChange={(e) => setName(e.target.value)}/>
        </Card.Header>
        <Card.Meta>
          Age: <MagicInput text={age} name='age'
                            onChange={(e) => setAge(e.target.value)}/>
        </Card.Meta>
      </Card.Content>
      </Card>
  );
}

export default CatCardWHooks;
