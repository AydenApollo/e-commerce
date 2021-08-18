import React, { Component } from 'react';
import { connect } from 'react-redux'

class Misc extends Component {
    render() {
        return(
            <h1>Look at all this stuff</h1>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var ConnectedMisc = connect(mapStateToProps)(Misc)
export default ConnectedMisc