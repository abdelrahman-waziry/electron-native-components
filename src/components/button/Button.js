import React from 'react'
import PropTypes from 'prop-types';

class Button extends React.Component {

    render(){
        return(
            <div>
                <button
                    className={this.props.className}
                    onClick={() => {this.props.onClick()}}
                    onContextMenu={() => {this.props.onRightClick()}}
                    disabled={this.props.disabled}
                >
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export default Button

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.isRequired,
    onClick: PropTypes.func,
    onRightClick: PropTypes.func,
    disabled: PropTypes.bool
}