import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuItem extends Component{
    render() {
        return (
            <li>
                <Link to={ this.props.patch }> { this.props.title } </Link>
            </li>
        );
    }
}

export default MenuItem;