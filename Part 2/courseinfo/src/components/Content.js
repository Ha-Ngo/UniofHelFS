import React from 'react'
import { Part } from './Part'

export const Content = (props) => {
    return (  
        props.parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises}></Part>)     
    )
}
