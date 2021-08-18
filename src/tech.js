import React, { Component } from 'react';
import { connect } from 'react-redux'

class Tech extends Component {
    render() {
        return(
            <h1>Look at all this stuff</h1>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var ConnectedTech = connect(mapStateToProps)(Tech)
export default ConnectedTech