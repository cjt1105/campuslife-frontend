import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Tooltip from 'material-ui/Tooltip';
import { Icon, Image, Button, Header, Grid, Segment } from 'semantic-ui-react'


class UserDeatailsCard extends Component {
    state = {}

    onDrop = (acceptedFiles, rejectedFiles) => {
        this.props.uploadPhoto(acceptedFiles[0], this.props.user.id)
    }

    renderCard = (details) => {
        let urlArray = details.profilePhoto.url.split('/upload')
        let firstUrlStringEl = urlArray[0]
        let secondUrlStringEl = urlArray[1]
        let urlStringWithSizeParams = firstUrlStringEl.concat('/upload/w_160,h_140,c_scale', secondUrlStringEl )
    return(
        <div>
            <Segment>
                        <Image size="tiny" avatar={true} src={urlStringWithSizeParams} />
                            <Header as='h5'>
                            {details.firstName} {details.lastName}, {details.year}
                            <Dropzone className="upload-photo" onDrop={this.onDrop}>
                                <Tooltip id="upload-note-tooltip" title="Upload a photo" placement="right">
                                    <Button className="upload-photo-button" icon circular >
                                        <Icon name='photo' />
                                    </Button>
                                </Tooltip>
                            </Dropzone>
                        </Header>
            </Segment>
            <Grid celled='internally'>
                {/* <Grid.Row>
                <Grid.Column width={6}>
                        <Segment>
                        <Image src={urlStringWithSizeParams} />
                            <br/>
                            <Header as='h5'>
                            {details.firstName} {details.lastName}, {details.year}
                            <br/>
                            <Dropzone className="upload-photo" onDrop={this.onDrop}>
                                <Tooltip id="upload-note-tooltip" title="Upload a photo" placement="right">
                                    <Button className="upload-photo-button" icon circular >
                                        <Icon name='photo' />
                                    </Button>
                                </Tooltip>
                            </Dropzone>
                        </Header>
                        </Segment>
                    </Grid.Column>
                </Grid.Row> */}
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Segment>
                        <Header as='h5'>
                            <Icon name='facebook square' />
                            <Header.Content>
                                Facebook
                            </Header.Content>
                            <Header.Subheader>
                                {details.facebook}
                            </Header.Subheader>
                        </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                        <Header as='h5'>
                            <Icon name='instagram' />
                            <Header.Content>
                                Instagram
                            </Header.Content>
                            <Header.Subheader>
                                {details.instagram}
                            </Header.Subheader>
                        </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                        <Header as='h5'>
                            <Icon name='snapchat ghost' />
                            <Header.Content>
                                Snapchat
                            </Header.Content>
                            <Header.Subheader>
                                {details.snapchat}
                            </Header.Subheader>
                        </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                        <Header as='h5'>
                            <Icon name='game' />
                            <Header.Content>
                            PS Plus
                            <Header.Subheader>
                                {details.ps4}
                            </Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}>
                        <Segment>
                            <Header as='h5'>
                                <Icon name='game' />
                                <Header.Content>
                                Xbox Live
                                <Header.Subheader>
                                    {details.xboxLive}
                                </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            <Header as='h5'>
                                <Icon name='twitter square' />
                                <Header.Content>
                                    Twitter
                                </Header.Content>
                                <Header.Subheader>
                                    {details.twitter}
                                </Header.Subheader>
                            </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            <Header as='h4'>
                                <Icon name='pinterest' />
                                <Header.Content>
                                    Pinterest
                                </Header.Content>
                                <Header.Subheader>
                                    {details.pinterest}
                                </Header.Subheader>
                            </Header>
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
            </Grid>
        </div>
    )
    }

    render() {
        if(this.props.user != null) {
            this.state.user = {...this.props.user}
            return (
                <div>
                    {this.renderCard(this.props.user)}
                </div>
            )
        }

    }
}

export default UserDeatailsCard