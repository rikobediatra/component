import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

/* eslint-disable react/prop-types */
function Dropdown({ options, onChange, value }) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return;
            }

            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }

    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);

        //change value
        onChange(option);
    }

    const rederedOption = options.map((option) => {
        return ( 
            <div 
            className="hover:bg-sky-100 cursor-pointer rounded p-1" 
            key={option.value} 
            onClick={() => {handleOptionClick(option)}}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center" 
                onClick={handleClick}
            >
                {value?.label || "Select..." }
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {rederedOption}
                </Panel>)
            }
        </div>
    );
}

export default Dropdown;