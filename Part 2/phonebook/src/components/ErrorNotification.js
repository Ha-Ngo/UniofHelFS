import React from 'react'

export const ErrorNotification = ({errorMessage}) => {
    if (errorMessage === null) {
        return null
    }
    return (
        <div className="error">
            {errorMessage}
        </div>
    )
}
