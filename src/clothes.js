import React, { Component } from 'react';
import { connect } from 'react-redux'

class Clothes extends Component {
    render() {
        return(
            <h1>Look at my drip</h1>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var ConnectedClothes = connect(mapStateToProps)(Clothes)
export default ConnectedClothes