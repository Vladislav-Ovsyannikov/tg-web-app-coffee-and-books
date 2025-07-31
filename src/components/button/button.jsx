import React from 'react';

const Button = (props) => {
    return (
        <Button {...props} classname = { 'button' + props.className } />
    );
};

export default Button;