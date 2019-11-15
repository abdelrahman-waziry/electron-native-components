import React from "react";

class Button extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button>
                {this.props.title}
            </button>
        )
    }
}

export default Button