import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class DefaultWindowsButton extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='windows'>
                <button
                    className={`rest ${this.props.mode} ${this.props.className}`}
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

export default DefaultWindowsButton

DefaultWindowsButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    disabled: PropTypes.bool,
    style: PropTypes.object
}