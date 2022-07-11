import React from "react";

import './membership.css'

const Membership = () => {
    return (
        <div>
            <div className={'row'}>
                <h1 className={'heading'}>Membership</h1>
                <br/>
                <hr/>
                <p>Get some simple cosmetic features that make your account more unique and special while also getting
                    access to new storylines and bosses.</p>
            </div>
            <div className={'row'}>
                <div className={'col-md'}>
                    <h2>Custom username effect</h2>
                </div>
                <div className={'col-md'}>
                    <p className={'userEffect'}>codonorix</p>
                </div>
            </div>
        </div>
    )
}

export default Membership