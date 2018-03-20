import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PostList from '../components/posts/post-list'
import getPosts from '../actions/posts/get-all-posts';
import loadUser from '../actions/user/load-user'


class PostContainer extends Component {

    componentDidMount() {
        if(this.props.posts.length === 0){
            this.props.getPosts()
        }
    }

    render() {
        return React.cloneElement(<PostList />, {
            posts: this.props.posts
        })
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPosts: getPosts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)