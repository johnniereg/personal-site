import React, { Component } from 'react';
import Title from './Title.jsx';
import Nav from './Nav.jsx';

class Header extends Component {
    render() {
        return (
            <div className="header container">
                <div className="row">
                    <Title title="Johnnie Regalado" />
                </div>
                <div className="row">
                    <Nav />
                </div>
            </div>
        );
    }
}

export default Header;