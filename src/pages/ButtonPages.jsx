import Button from "../components/Button";
import {GoBell, GoCloud, GoDatabase} from 'react-icons/go';

function ButtonPages() {
  const handleClick = () => {
  };

  return (
    <>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-5">
          <GoBell />
          Click Me
        </Button> 
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          Click ads
        </Button> 
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          No ads
        </Button>
      </div>
      <div>
        <Button danger>Save</Button>
      </div>
      <div>
        <Button success rounded>Done</Button>
      </div>
    </>
  )
}

export default ButtonPages
