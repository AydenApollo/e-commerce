import React, { Component } from 'react';
import { connect } from 'react-redux';




class Checkout extends Component {
    render() {
        return (
           <div>
               Checkout: {this.props.cart_list.map((item) => (
                   <img src={item.image}/>
               ))}
           </div>
        )
    }
}

function mapStateToProps (state) {
    return {cart_list: state.cart_list}
}

var connectedCheckout = connect(mapStateToProps)(Checkout);
export default connectedCheckout