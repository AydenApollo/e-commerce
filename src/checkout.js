import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



let theme = createTheme();
 theme = responsiveFontSizes(theme);

class Checkout extends Component {
    render() {
        return (
           <div className="checkout">
               <ThemeProvider theme={theme}>
                   <Typography variant="h3">Checkout:</Typography>
               </ThemeProvider>
               <div>
                {this.props.cart_list.map((item) => (
                   <img src={item.image} alt={item.title}/>
               ))}
               </div>
           </div>
        )
    }
}

function mapStateToProps (state) {
    return {cart_list: state.cart_list}
}

var connectedCheckout = connect(mapStateToProps)(Checkout);
export default connectedCheckout