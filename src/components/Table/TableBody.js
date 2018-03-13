import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ Items }) => {
    return (
        
        <tbody>
            {  Items.map((item,index) => 
                <TableRow key={item.email} id={index}  Item={item} />
            )}
        </tbody>)
}
export default TableBody;

