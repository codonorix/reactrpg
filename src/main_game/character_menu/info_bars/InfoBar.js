import React from "react";

import './infoBar.css'

const InfoBar = (props) => {
    return (
        <div className={'col-md'}>
            <div className={props.type}>
                <p>{props.health}⬢{props.healthMax}</p>
            </div>
        </div>
    )
}

export default InfoBar