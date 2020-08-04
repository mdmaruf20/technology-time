import React, { Component } from 'react'
import MenuItem from './MenuItem/MenuItem'

class TopMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            topLink: [
                {
                    title: 'About',
                    patch: '/about'
                },
                {
                    title: 'Advertise',
                    patch: '/advertise'
                },
                {
                    title: 'Privacy & Policy',
                    patch: '/privacy'
                },
                {
                    title: 'Contact Us',
                    patch: '/contact-us'
                }
            ]
        }
    }

    render() {
        return (
            <div className="top-menu">
                <ul>
                    { this.state.topLink.map(menuItem => {
                        return <MenuItem title={ menuItem.title } patch={ menuItem.patch } />
                    }) }
                </ul>
            </div>
        );
    }
}

export default TopMenu;