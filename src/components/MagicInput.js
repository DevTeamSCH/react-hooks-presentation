import React, { Component } from 'react'
import { Input } from 'semantic-ui-react';

export default class MagicInput extends Component {
    constructor(props){
      super(props);
      this.state = {
        clicked: false
      }
    }

    render(){
      return(
        <div>
        {
          this.state.clicked ?
          <Input name={this.props.name} onBlur={() => this.setState({clicked: false})} onChange={(e) => this.props.onChange(e)} value={this.props.text}/>
          :
          <span onClick={() => this.setState({clicked: true})}>{this.props.text}</span>
        }
        </div>
      );
    }
}
