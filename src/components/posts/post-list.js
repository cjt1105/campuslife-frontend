import React, { Component } from 'react'

export default class PostList extends Component {
    componDidUpdate() {
        console.log(this.props)
    }

    render() {
        return <div>posts</div>
    }
}