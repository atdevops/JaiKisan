import React, { Component } from 'react';

export default class TableRowCompany extends Component {   
  render(){
    return (
        <React.Fragment>
        
        <li>{this.props.Item.companyName}</li>
       
        </React.Fragment>
    );
}
}