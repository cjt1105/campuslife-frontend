import React, { Component } from 'react'
import { Icon, Image, Button, Header, Grid } from 'semantic-ui-react'

export default class LectureDetailsCard extends Component {
    componentDidUpdate(){
        
    }

    render(){
        if(this.props.lecture != null){
            let lecture = this.props.lecture
            return(
                <div className="lecture-details">
                    <div className="container-backdrop">
                        <Grid columns={16} textAlign={'center'}>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h5'>
                                        <Icon name='write' />
                                        <Header.Content>
                                            {lecture.name}
                                        </Header.Content>
                                        <Header.Subheader>
                                            {lecture.professor}
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Header as='h5'>
                                        <Icon name='wait' />
                                        <Header.Content>
                                            Meeting time
                                        </Header.Content>
                                        <Header.Subheader>
                                            {lecture.time}  {lecture.days}
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </div>
                </div>
            )
        }
        return <div>wow</div>
    }
}