import React, { ReactNode } from 'react'
interface IProps {
    children?: ReactNode
}
function Index({ children }: IProps) {
    return (
        <h1>
            {children}
        </h1>
    )
}
export default Index