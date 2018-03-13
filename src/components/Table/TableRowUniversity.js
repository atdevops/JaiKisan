import React, { Component } from 'react';

export default class TableRowUniversity extends Component {   
  render(){
    return (
        <React.Fragment>
       
        <li>{this.props.Item.university}</li> 
       
        </React.Fragment>
    );
}
}