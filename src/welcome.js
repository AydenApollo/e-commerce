import React, { Component } from 'react';
import { connect } from 'react-redux';

class WelcomePage extends Component {
    render() {
        return (
            <h1>Welcome Shopper</h1>
        )
            
        
    }
}

function mapStateToProps (state) {
    return {}
}


function mapDispatchToProps (dispatch) {
    return {
        add_contact: function (data) {
            dispatch(add_contact(data))
        }
    }
}

var ConnectedWelcomePage = connect(mapStateToProps)(WelcomePage)
export default WelcomePage
        