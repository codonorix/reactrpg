import React from "react";

const PlayerItems = (props) => {
    return(
        <div className={'col-md'}>
            <img src={props.src} />
            <h3>{props.item}</h3>
            <p>{props.itemName}</p>
        </div>
    )
}

export default PlayerItems