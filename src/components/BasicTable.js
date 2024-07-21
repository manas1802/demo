import React, {useMemo} from "react";
import { useTable } from "react-table";
import sample_data from './sample_data.json'
import {COLUMNS} from './columns'
import './table.css' ;


export const BasicTable=() =>{

    const columns=useMemo(()=>COLUMNS,[]);
    const data=useMemo(()=>sample_data,[]);

    const table_instance=useTable({
        columns,
        data
    })

    const{getTableProps,getTableBodyProps,headerGroups,footerGroups,rows,prepareRow}= table_instance

    return (
        <>    
            <table {...getTableProps()}className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row); // Corrected typo: prepareRow instead of perpareRow
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map(column => (
                            <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                        ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>    
    );
};