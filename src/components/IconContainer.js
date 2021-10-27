import React from 'react'

const IconContainer = ({ children, color, count }) => {
    return (
        <div className='icon-group'>
            <div className={`icon-container icon-${color}`}>
                {children}
            </div>
            {count > 0 && <p className={`icon-text icon-text-${color}`}>{count}</p>}
        </div>
    )
}

export default IconContainer