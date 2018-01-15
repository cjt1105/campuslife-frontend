import React, { Component } from 'react';

class HomePage extends Component {
    componentDidMount() {
        console.log('homepage')
    }

    render() {
        return(
            <h1> This is the home page</h1>
        )
    }
}

export default HomePage