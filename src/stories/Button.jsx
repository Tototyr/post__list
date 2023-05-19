import cx from 'classnames'

import React from 'react'

export function Button({ mode, backgroundColor, label }) {
    const buttonClasses = cx({
        [`mode_${mode}`]: mode === 'primary' || mode === 'secondary'
    })

    const buttonStyle = {
        backgroundColor:
            backgroundColor || (mode === 'secondary' ? 'white' : 'blue'),
        color: mode === 'secondary' ? 'black' : 'white'
    }

    return (
        <button className={buttonClasses} style={buttonStyle} type="submit">
            {label}
        </button>
    )
}