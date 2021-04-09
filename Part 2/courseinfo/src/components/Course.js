import React from 'react'

import { Header } from './Header'
import { Content } from './Content'
import { Total } from './Total'

export const Course = ({course}) => {
    console.log(course)
    return (  
        <>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total total={course.parts}></Total>
        </>
    )
}
