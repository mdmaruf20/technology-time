import React, { Component } from 'react'
import TopMenu from '../components/TopMenu/TopMenu'

class Home extends Component{
    render() {
        return (
            <div className="home">
                <TopMenu />
                <h1>I am Home Page</h1>
            </div>
        );
    }
}

export default Home;