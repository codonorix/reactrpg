import React from "react";
import {Link} from "react-router-dom";

const ActionButtons = (props) => {
    return (
        <div className={'col-md-8'}>
            <Link to={props.location} style={{textDecoration: 'none', color: 'white'}}>
                <div className={'actionButton'}>
                    <p>{props.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default ActionButtons