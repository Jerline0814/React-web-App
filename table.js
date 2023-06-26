import React from 'react'

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>Email</th>
                </tr>
                {data.map(item)=> 
                    <tr key={item.id}>
                <tr>
                    <td>7</td>
                    <td>Michael</td>
                    <td>Lawson</td>
                    <td>"michael.lawson@reqres.in"</td>
                </tr>
            }
            </tbody>
        </table>
    );
};

export default Table;