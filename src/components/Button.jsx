import React, { Component } from 'react';

class Button extends Component {
    
    render(){
        return (
            <div className="button" onClick={(e) => this.props.clickFunction }>
                {this.props.title}
            </div>
        );
    }
}

export default Button;