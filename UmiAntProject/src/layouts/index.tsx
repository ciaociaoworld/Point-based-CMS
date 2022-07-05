import React, { ReactNode } from 'react'

// For interface and get ReactNode method
interface IProps {
    children?: ReactNode
}
// To connect routes and render in {props?.children}
function Index(props:IProps) {
    return (
        <div style={ { color: "red"} }>
            {props?.children}
        </div>
    )
}

export default Index
