import React from 'react';
// import { handleNav } from './utils';
import '../styles/navbar.css';
import '../styles/colorify.css';
import '../styles/fonting.css';

class Navbar extends React.Component {

    render() {

        const navbarItems = this.props.buttons.map((button, index) => {
            return (
                <div className="navbar-item" key={index}>
                    <span
                        className="material-symbols-sharp"
                        onClick={button.handleOpen}>
                        {button.iconName}
                    </span>
                </div>
            );
        }
        );

        return (

            <div className="navbar">
                <div className="navbar-buttons">
                    {navbarItems}
                    <div className='navbar-home-btn'>
                        <span
                            className="material-symbols-sharp"
                            onClick={this.props.homeButton.handleHome}>
                            {this.props.homeButton.iconName}
                        </span>
                    </div>
                </div>
            </div>
        );
    };
}

export default Navbar;


