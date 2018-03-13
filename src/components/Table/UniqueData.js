import React from 'react';
import TableRowUniversity from './TableRowUniversity';
import TableRowCompany from './TableRowCompany'; 
import { FilterUniqueValues } from '../../utility/FilterUniqueValues';
const UniqueData = ({ Items }) => {console.log(Items);

    let uniqueCompany = FilterUniqueValues(Items, 'companyName');
    let uniqueUniversity = FilterUniqueValues(Items, 'university');
    console.log(Items);
    return (
        <React.Fragment>
            <tr>
                <td>
            {  uniqueCompany.map((item,index) => 
                <TableRowCompany key={item.email} id={index}  Item={item} />
                
            )}
                </td>
                <td>
                {  uniqueUniversity.map((item,index) => 
                <TableRowUniversity key={item.email} id={index}  Item={item} />
            )}
                </td>
            </tr>
        </React.Fragment>)
}
export default UniqueData;