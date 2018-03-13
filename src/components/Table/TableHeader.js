import React from 'react';

const TableHeader = ({ headers, onSort }) => {
    return (
        <thead>
            <tr>
            {headers.map((title) => {
                return (
                    <th key={title} onClick={() => onSort(title)}>
                        {title}(sort me)
                    </th>
                );
            })}
            </tr>
        </thead>
    );
}
export default TableHeader;