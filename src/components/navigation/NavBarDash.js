import React, { Component } from 'react'
import ProfileButton from './ProfileButton.js'
import Menu from './Menu.js'

import './NavBarDashStyles.css'

class NavbarDash extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    handleMouseDown(e) {
        this.toggleMenu()
        e.stopPropagation()
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        )
    }

    render() {
        return (
            <div className="navBar">
                <h1 className="title"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/dashboard";
                    }}>Studium</h1>
                <ProfileButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
            </div>
        )
    }
}

export default NavbarDash 