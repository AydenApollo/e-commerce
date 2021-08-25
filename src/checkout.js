import React, { Component } from 'react';
import { connect } from 'react-redux';




class Checkout extends Component {
    render() {
        return (
           <div>Buy Yo Shit</div>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var connectedCheckout = connect(mapStateToProps)(Checkout);
export default connectedCheckout