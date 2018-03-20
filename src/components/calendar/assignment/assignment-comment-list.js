import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default class AssignmentCommentList extends Component {
    componentDidMount(){
        console.log("props", this.props)
    }

    renderComments =(comments)=> {
        return comments.map((comment) => {
            return(
                <Comment>
                    <Comment.Avatar as='a' src={comment.postedBy.profilePhoto.url} />
                    <Comment.Content>
                    <Comment.Author as='a'>{comment.postedBy.firstName} {comment.postedBy.lastName}</Comment.Author>
                    <Comment.Metadata>
                        <span>Today at 5:42PM</span>
                    </Comment.Metadata>
                    <Comment.Text>{comment.body}</Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                    </Comment.Content>
                </Comment>
            )
        })
    }

    render(){
        if(this.props.comments != undefined){
            return(
                <div>
                    <div>
                        <Comment.Group>
                        {this.renderComments(this.props.comments)}
                        </Comment.Group>
                    </div>
                </div>
            )
        }
        return <div>hey</div>
    }
}