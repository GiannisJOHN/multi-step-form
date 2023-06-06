
import React from 'react'
import Heading from '../heading/heading'
import NavigationButtons from '../navigation-buttons/navigationButtons'


function FirstStep(props) {
    return (
        <div>
            <Heading title='Personal info' subtitle='Please provide your name, email address, and phone number.'/>
            <form onSubmit={''} className='firstForm'>
                <div className='inputField'>
                    <label htmlFor="name" className='text-style-body-medium label-color'>Name:</label>
                    <input
                    className='input-style'
                    type="text"
                    id="name"
                    placeholder="e.g. Stephen King"
                    required
                    />
                </div>
                <div className='inputField'>
                    <label htmlFor="email" className='text-style-body-medium label-color'>Email:</label>
                    <input
                    className='input-style'
                    type="email"
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                    required
                    />
                </div>
                <div className='inputField'>
                    <label htmlFor="phoneNumber" className='text-style-body-medium label-color'>Phone Number:</label>
                    <input
                    className='input-style'
                    type="tel"
                    id="phoneNumber"
                    placeholder="e.g. +1 234 567 890"
                    required
                    />
                </div>
            <NavigationButtons />
            </form>
        </div>
    )
}

export default FirstStep