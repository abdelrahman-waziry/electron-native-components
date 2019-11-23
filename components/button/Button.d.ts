import * as React from 'react'
import NativeComponents from "../index"

export interface ButtonProps extends NativeComponents.Props {
    
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
     * Determines button type
     * @default 'default'
     */
    type?: 'default' | 'icon'
}

export class Button extends React.Component<ButtonProps, {}> { }

export default Button;