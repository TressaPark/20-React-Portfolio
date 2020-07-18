import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Header(props) {
    //JS here
    const history = useHistory();

    const myConstant = 7632;
        
    const [myVariable, setMyVariable] = useState(0);

    const handleButtonClick = (event) => {
        let newValue = myVariable + 1;
        setMyVariable(newValue);
    
    };

const handleToPortfolio = (event) => {
    history.push('/portfolio');
};

    return(
        //html stuff
        <>
        <p>{myVariable}</p>
        <button type='button' onClick={handleButtonClick}>button text</button>
        <button type ='button' onClick={handleToPortfolio}>
        Go to Portfolio
        </button>
        <p>About Me Content</p>
        <p>{myConstant}</p>
        </>
    );
}

export default Header;