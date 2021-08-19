import React, { Component } from 'react';
import { connect } from 'react-redux'

class Purchase extends Component {
    render() {
        return(
            <h1>Your Transaction</h1>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var ConnectedPurchase = connect(mapStateToProps)(Purchase)
export default ConnectedPurchase