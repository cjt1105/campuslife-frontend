import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class StudentList extends Component {

    renderStallWallPosts = (posts) => {
        return posts.map(post => {
            const user = post.postedBy
            return (
                <div className='student-card'>
                    <div className="student-backdrop">
                    <div className="student-name">
                        {post.body}<br/>
                        - {user.penName}
                    </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if(this.props.stall_wall != undefined){
            return (
                <div>
                    Stall Wall
                    <div>
                        {this.renderStallWallPosts(this.props.stall_wall)}
                    </div>
                </div>
            );
    }
    return null
    }
}