import React from 'react'

export const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => (<p>{part.part} {part.exercises}</p>) )}
        </div>
    )
}
