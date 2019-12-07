import React from 'react'
import { getOS } from '../_utils/helpers';
import DefaultWindowsButton from './Default.Windows';
import DefaultMacOSButton from './Default.MacOS';

class Button extends React.Component {
    constructor(props){
        super(props)
        this._renderButton = this._renderButton.bind(this)
    }

    /**
     * Renders Button based on given type
     */
    _renderButton({type, ...rest}) {
        switch (type) {
            case 'default':
                return (
                    getOS() === 'Windows' ? 
                    <DefaultWindowsButton {...rest}/>
                    : <DefaultMacOSButton/>
                )
                break;
            default:
                break;
        }
    }

    render(){

        return(
            <div>
                {this._renderButton(this.props)}
            </div>
        )
    }
}

export default Button