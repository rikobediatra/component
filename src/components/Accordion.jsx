/* eslint-disable react/prop-types */
import { useState } from "react";
import {FaCircleArrowDown, FaCircleArrowLeft} from 'react-icons/fa6'

function Accordion ({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? <FaCircleArrowDown /> : <FaCircleArrowLeft />}</span>

        return (
            <div key={item.id}>
                <div 
                className="flex justify-between p-3 bg-gray-200 border-b items-center cursor-pointer " 
                onClick={() => {handleClick(index)}} >
                    {item.label}
                    {icon}
                </div>
                {/* conditional rendered */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}   
            </div>
        );
    });

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    );
}

export default Accordion;