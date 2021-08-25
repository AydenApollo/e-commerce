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
                Looky Here
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var connectedViewCart = connect(mapStateToProps)(ViewCart);
export default connectedViewCart