import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid black', height: '1000px'}} >
            {props.children}
        </div>
    );
    // return <h1>hi</h1>
};

export default Scroll;