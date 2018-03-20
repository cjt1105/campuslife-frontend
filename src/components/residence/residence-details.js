import React, { Component } from 'react'
import { Icon, Image, Button, Header, Grid } from 'semantic-ui-react'

export default class ResidenceDetailsCard extends Component {
    componentDidUpdate(){

    }

    render(){
        if(this.props.residence != null){
            let residence = this.props.residence
            let nameArray = residence.name.split(',')
            let residenceName = nameArray[0]
            let residenceAddress = nameArray[1]
            return(
                <div className="lecture-details">
                    <div className="container-backdrop">
                        <Grid columns={16} textAlign={'center'}>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h5'>
                                        <Icon name='building' />
                                        <Header.Content>
                                            {residenceName}
                                        </Header.Content>
                                        <Header.Subheader>
                                            {residenceAddress}
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>
                                {/*<Grid.Column width={8}>
                                    <Header as='h5'>
                                        <Icon name='wait' />
                                        <Header.Content>
                                            Meeting time
                                        </Header.Content>
                                        <Header.Subheader>
                                            {lecture.time}  {lecture.days}
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>*/}
                            </Grid.Row>

                        </Grid>
                    </div>
                </div>
            )
        }
        return <div>wow</div>
    }
}