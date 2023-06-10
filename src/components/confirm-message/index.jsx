import React from 'react';
import confirmImg from '../../assets/images/icon-thank-you.svg'

function ConfirmMessage() {
    return (
        <div className='confirm-container'>
            <img src={confirmImg} alt="" />
            <h1>Thank you!</h1>
            <p className='confirm-container-p-color'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            <a href="/">restart</a>
        </div>
    )
}

export default ConfirmMessage