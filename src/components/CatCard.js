import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import MagicInput from './MagicInput';

export default class CatCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Macska',
      age: 0,
      image: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://cataas.com/cat/gif?heigth=200',
      {mode: 'cors'})
    .then(response => response.blob())
    .then(blob => {
          console.log(blob);
          this.setState({image: URL.createObjectURL(blob)});
});
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){

    return(
      <Card style={{padding: '2em', margin: '2em'}}>
        <Image src={this.state.image} />
        <Card.Content>
          <Card.Header>
          <MagicInput text={this.state.name} name='name' onChange={this.handleChange}/>
          </Card.Header>
          <Card.Meta>
            Age: <MagicInput text={this.state.age} name='age' onChange={this.handleChange}/>
          </Card.Meta>
        </Card.Content>
    </Card>
    );
  }


}
