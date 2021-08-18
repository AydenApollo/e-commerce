import React, { Component } from 'react';
import { connect } from 'react-redux'

class Shoes extends Component {
    render () {
        return (
            <h1>Look at these shoes dawg</h1>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var ConnectedShoes = connect(mapStateToProps)(Shoes)
export default ConnectedShoes