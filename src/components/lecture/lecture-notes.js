import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class NoteList extends Component {

    renderNotes = () => {
        return this.props.notes.map(note => {
            const user = note.postedBy.user
            return (
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Meta>
                            <span>Posted by</span>
                            <span>{user.firstName} {user.lastName}</span>
                            </Item.Meta>
                            <Item.Description>
                                <a href={note.url} target="_blank">
                                    {note.description}
                                </a>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            )
        })
    }

    render() {
        return this.renderNotes()
    }
}