import { Fragment } from "react";

/* eslint-disable react/prop-types */
function Table({ data, config, keyFn }) {
    
    const renderedColumn = config.map((column) => {
        if (column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return (
            <th key={column.label}>{column.label}</th>
        );
    });

    const rederedRow = data.map((rowData) => {
        const renderedCell = config.map((column) =>{
            return (
                <td key={column.label} className="p-2">
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCell}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedColumn}
                </tr>
            </thead>
            <tbody>{rederedRow}</tbody>
        </table>
    );
}

export default Table;