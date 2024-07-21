import React from "react";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    return (
        <span>
            Search: {' '}
            <input
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value || undefined)}
                placeholder="Type to search..."
                style={{
                    fontSize: '1.1rem',
                    margin: '0.5rem'
                }}
            />
        </span>
    );
};

export default GlobalFilter;
