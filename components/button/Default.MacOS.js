import React from 'react'
import PropTypes from 'prop-types'

class DefaultMacOSButton extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <button
                    className={this.props.className}
                    onClick={this.props.onClick}
                    onContextMenu={this.props.onContextMenu}
                    disabled={this.props.disabled}
                    style={this.props.style}
                >
                    {this.props.children}
                </button>
            </div>
        )
    }

}

export default DefaultMacOSButton

DefaultMacOSButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    disabled: PropTypes.bool,
    style: PropTypes.object
}