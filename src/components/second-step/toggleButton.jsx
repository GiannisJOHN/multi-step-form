import React from 'react';

function ToggleButton(props) {
    return (
        <div className='toggle-button-container'>
            <span className='text-style-body-medium toggle-active'>Monthly</span>
            <button className='toggle-button'>
                <div className="toggle-circle" />
            </button>
            <span className='text-style-body-medium toggle-inactive'>Yearly</span>
        </div>
    )
}

export default ToggleButton