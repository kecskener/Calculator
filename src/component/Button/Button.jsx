import React from 'react';

const Button = (props) => {
    return(
        <div className={props.class} onClick={props.click}>{props.symbol}</div>
    );
}

export default Button;