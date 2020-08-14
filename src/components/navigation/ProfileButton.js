import React, { Component } from "react"
import './NavBarDashStyles.css'

class ProfileButton extends Component {
    render() {
        return (
            <img
                src={require("../../images/no-icon.svg")}
                id="profilePicture"
                alt="The User's Icon"
                onMouseDown={this.props.handleMouseDown}
            />
        );
    }
}

export default ProfileButton