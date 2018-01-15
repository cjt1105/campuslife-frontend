import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadUser from '../actions/user/load-user.js'

class UserContainer extends Component {
    componentDidMount() {
        this.props.loadUser(0);
    }

    render() {
        if(this.props.user === null) {
            return (
                <div>Hey</div>
            )
        }
        else {
            return (
                <div>{this.props.children}</div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadUser: loadUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);