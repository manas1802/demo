import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import sample_data from './sample_data.json';
import { COLUMNS } from './columns';
import GlobalFilter from './GlobalFilter';
import './table.css';
import { matchSorter } from 'match-sorter';

// Custom global filter function
function globalFilter(rows, columnIds, filterValue) {
    return matchSorter(rows, filterValue, {
        keys: columnIds.map(col => `original.${col}`)
    });
}

export const FilteringTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => sample_data, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            globalFilter
        },
        useGlobalFilter,
        useSortBy
    );

    return (
        <>
            <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} key={cell.column.id}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()} key={footerGroup.id}>
                            {footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()} key={column.id}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>
    );
};
