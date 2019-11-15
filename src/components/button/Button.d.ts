import * as React from 'react'

export interface ButtonProps {
    /**
     * Passs a react node to the button as children
     * @default false 
     */
    children?: React.ReactNode
    
    /**
     * Passes a class name to button wrapper
     * @default false
     */
    className?: string

    /**
     * Determines whether the button is disabled
     * @default false
     */
    disabled?: boolean

    /**
     * handles onClick event
     */
    onClick?: Function

    /**
     * handles context menu click
     */
    onRightClick?: Function
}