import { useState } from "react";
import { FaArrowDownShortWide, FaArrowUpShortWide, FaArrowDownUpAcrossLine} from 'react-icons/fa6';
import Table from "./Table";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const {config, data} = props;

    const handleClick = (label) => {
        // checking the same column or not
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => 
            (<th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)} >
                <div className="flex items-center">
                    {getIcon(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>)
        }
    });

    // only sort if not null
    // make a copy data
    // look sortvalue
    let sortedData = data;

    if (sortOrder && sortBy) {
        const {sortValue} = config.find(column => column.label === sortBy);

        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB)  * reverseOrder;
            }
        });
    }

    return (
    <div>
        <Table {...props} config={updatedConfig} data={sortedData}/>
    </div>
    );
}

function getIcon(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                {<FaArrowDownUpAcrossLine />}
            </div>
        );
    }
    
    if (sortOrder === null) {
        return (
            <div>
                {<FaArrowDownUpAcrossLine />}
            </div>
        );
    } else if (sortOrder === 'asc') {
        return (
            <div>
                {<FaArrowDownShortWide />}
            </div>
        );
    } else if (sortOrder === 'desc') {
        return (
            <div>
                {<FaArrowUpShortWide />}
            </div>
        );
    }
}

export default SortableTable;