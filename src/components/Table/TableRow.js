import React, { Component } from 'react';

export default class TableRow extends Component {   
  render(){
    return (
        <React.Fragment>
        <tr>
        <td>{this.props.Item.firstName}</td>
        <td>{this.props.Item.email}</td>
        <td>{this.props.Item.gender}</td>
        </tr>
        </React.Fragment>
    );
}
}