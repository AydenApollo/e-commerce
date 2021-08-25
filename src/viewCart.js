import React, { Component } from 'react';
import { connect } from 'react-redux';

import miscData from './misc.json';
import clothesData from './clothes.json';
import techData from './tech.json';
import shoesData from './shoes.json';

class ViewCart extends Component {
    render() {
        return (
            <div>
                {this.props.cart_list.map((item) => {
                    console.log(item)
                })}
                Looky Here
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {cart_list: state.cart_list}
}

var connectedViewCart = connect(mapStateToProps)(ViewCart);
export default connectedViewCart