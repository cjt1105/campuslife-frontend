import React, { Component } from 'react'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { ListItem, ListItemIcon, ListItemText, List } from 'material-ui/List';
import { Feed, Icon, Form, TextArea, Segment, Container } from 'semantic-ui-react'


export default class PostList extends Component {

    renderPostLists = (posts) => {
        return posts.map(post => {
                if(post.postedBy != null){
                    const postedBy = post.postedBy.user
                }
                const postedBy = {
                    user: {
                        firstName: null,
                        lastName: null,
                        profilePhoto: {
                            url: null
                        }
                    }
                }
                return (
                    <Feed>
                        <Feed.Event>
                        {/*<Feed.Label>
                            <img src={postedBy.profilePhoto.url} />
                        </Feed.Label>*/}
                        <Feed.Content>
                            <Feed.Summary>
                            <Feed.User>{postedBy.firstName} {postedBy.lastName}</Feed.User> posted to his feed
                            {/*<Feed.Date>{post.timestamp.toUTCString()}</Feed.Date>*/}
                            <Feed.Extra text>
                                {post.body}
                            </Feed.Extra>
                            </Feed.Summary>
                            <Feed.Meta>
                            <Feed.Like>
                                <Icon name='like' />
                                4 Likes
                            </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                        </Feed.Event>
                    </Feed>
                )
            })
    }

    render() {
        if(this.props.posts.length > 0){
            return(
                <div>
                {/*<Segment>*/}
                <Form>
                    <TextArea autoHeight placeholder="What's on your mind?"rows={2} />
                </Form>
                {/*</Segment>*/}
                {/*<Segment>*/}
                {this.renderPostLists(this.props.posts)}
                {/*</Segment>*/}
                </div>
            )
        }
        return <div>posts</div>
    }
}