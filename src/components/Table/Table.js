import React, { Component } from 'react';
import TableHeader from './TableHeader'
import UniqueData from './UniqueData';
import TableBody from './TableBody';
import axios from 'axios';

const headers = ['firstName', 'email','gender'];

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            sortOrder: true
        };
        this.onSort = this.onSort.bind(this);
    }

    onSort(tblheader) {
        this.sortArrOfObjectsByParam(this.state.users, tblheader, this.state.sortOrder)
        this.setState({ users: this.state.users, sortOrder: !this.state.sortOrder })
    }
    sortArrOfObjectsByParam(arrToSort, strObjParamToSortBy, sortAscending) {
        arrToSort.sort(function (a, b) {
            if (sortAscending) {
                return a[strObjParamToSortBy].localeCompare(b[strObjParamToSortBy].toLowerCase());
            }
            else {
                return b[strObjParamToSortBy].localeCompare(a[strObjParamToSortBy].toLowerCase());
            }
        });
    }
    componentDidMount(){
        this.usersList();
      }
      usersList(){
        axios.get(`https://shielded-headland-24739.herokuapp.com/users`).then(res => {
            const users = res.data.data.map(obj => obj);
            this.setState({ users });
          });
      }
    render() {
        return (
            <div>
                <table className="table table-striped table-hover">
                    <TableHeader
                        headers={headers}
                        onSort={this.onSort} />
                        <TableBody
                         Items={this.state.users} />
                </table>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr> 
                            <th> Company Name(Distinct) </th>
                            <th> University(Distinct) </th>
                        </tr>
                    </thead>
                    <tbody>
                     <UniqueData 
                            Items = {this.state.users} />
                    </tbody>
                </table>
            </div>)}
}
