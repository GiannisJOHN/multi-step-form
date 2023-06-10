
import React from 'react'
import Heading from '../heading/heading'
import NavigationButtons from '../navigation-buttons/navigationButtons'
import { validate } from '../../global-state/validSlice'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep } from '../../global-state/stepSlice'
import { updateInfo } from '../../global-state/userInfoSlice'



function FirstStep() {
    let userInfo = useSelector((state) => { return state.userInfo})

    const handleInputChange = (event) => {
        let info = [event.target.name, event.target.value]
        dispatch(updateInfo(info))
    }

    let dispatch = useDispatch()

    function validateForm(event) {
        event.preventDefault()
        let status = event.target.checkValidity()
        if (status === true) {
            dispatch(validate(status))
            dispatch(nextStep())
        }
    }

    return (
        <div>
            <Heading title='Personal info' subtitle='Please provide your name, email address, and phone number.'/>
            <form onSubmit={validateForm} className='firstForm'>
                <div className='inputField'>
                    <label htmlFor="name" className='text-style-body-medium label-color'>Name:</label>
                    <input
                    className='input-style'
                    type="text"
                    id="name"
                    placeholder="e.g. Stephen King"
                    name="name"
                    required
                    value={userInfo.name}
                    onChange={handleInputChange}
                    />
                </div>
                <div className='inputField'>
                    <label htmlFor="email" className='text-style-body-medium label-color'>Email:</label>
                    <input
                    className='input-style'
                    type="email"
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className='inputField'>
                    <label htmlFor="phoneNumber" className='text-style-body-medium label-color'>Phone Number:</label>
                    <input
                    className='input-style'
                    type="tel"
                    name='tel'
                    value={userInfo.tel}
                    id="phoneNumber"
                    onChange={handleInputChange}
                    placeholder="e.g. +1 234 567 890"
                    />
                </div>
            <NavigationButtons />
            </form>
        </div>
    )
}

export default FirstStep