import React from "react";

import './footer.css'
const Footer = () => {
    return(
        <div className={'row mainInfo'}>
            <div className={'col-md infoCard'}>
                <h1>Codo RPG</h1>
                <br />
                <p>Copyright, all rights reserved to the original creator(s)</p>
            </div>
            <div className={'col-md infoCard'}>
                Follow us
            </div>
            <div className={'col-md infoCard'}>
                <h1>Latest News Updates</h1>
                <div className={'row'}>
                    <div className={'col-md customButton'}>
                        Welcome to CodoRPG
                    </div>
                    <div className={'col-md customButton'}>
                        Introduction
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer