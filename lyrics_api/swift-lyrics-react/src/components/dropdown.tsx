import { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import '../styles/App.css';

const DropdownComponent = (props: any) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownHandler = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={dropdownHandler} className='dropdown-style'>
          <DropdownToggle caret>
            {props.toggleNumberListed}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => props.setToggleNumberListed(10)}>10</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => props.setToggleNumberListed(25)}>25</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => props.setToggleNumberListed(50)}>50</DropdownItem>
          </DropdownMenu>
        </Dropdown>
    )
}

export default DropdownComponent
