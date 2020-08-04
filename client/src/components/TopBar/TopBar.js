import React, { Component } from 'react'
import './TopBar.css'
import TopMenu from './TopMenu/TopMenu'

class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <TopMenu />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;