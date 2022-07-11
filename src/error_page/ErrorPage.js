import React from "react";

import './errorPage.css'

import four04image from '../icons/images/404image.png'


const ErrorPage = () => {
    const errorMessages = [
        'A mage casted a spell that made the page disappear',
        'This land... isn\'t marked on our map... how did you get here...' ,
        'oh no! The crystal ball lied to us! This place isn\'t real! HUH!'
    ]

    let message = errorMessages[Math.floor(Math.random()*errorMessages.length)]

    return(
        <div>
            <img src={four04image} width={250} height={250}/>
            <h1 className={'errorMessage'}>404 LAND NOT FOUND</h1>
            <hr />
            <h2 id={'biggerText'}>{message}</h2>
            <hr />
        </div>
    )
}

export default ErrorPage