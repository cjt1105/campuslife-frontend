import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { ListItem, ListItemIcon, ListItemText, List } from 'material-ui/List';

import PostList from '../components/posts/post-list'
import getPosts from '../actions/getPosts';
import loadUser from '../actions/user/load-user'


class PostContainer extends Component {

    componentDidMount() {
        console.log('posts', this.props.posts)
        if(this.props.posts.length === 0){
            this.props.getPosts()
        }
    }

    renderList = () => {
        let list = this.props.posts.map(post => {
            return (
                <ListItem>
                    <ListItemText key={post.id} primary={post.body} />
                </ListItem>
            )
        })
        console.log(<List>{list}</List>)
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