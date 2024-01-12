import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPages() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  }

  const optionColor = [
    {label: "red", value: "red"},
    {label: "green", value: "green"},
    {label: "blue", value: "blue"},
  ]

  return (
    <>
      <Dropdown 
        options={optionColor}
        value={selection}
        onChange={handleSelection} 
      />
    </>
  );
}

export default DropdownPages;