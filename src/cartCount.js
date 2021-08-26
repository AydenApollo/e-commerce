import react from 'react';
import { connect } from 'react-redux';

class ShoppingCount extends (react.Component) {
	render() {
        var in_cart = 0;
        this.props.cart_list.forEach((item) => {
            if (item.in_cart) {
				in_cart += 1;
			}
		});

		return (
			<div>In Cart: {this.props.cart_list.length}</div>
		);
	}
}

function mapStateToProps (state) {
	return {cart_list: state.cart_list};
}

var ConnectedCount = connect(mapStateToProps)(ShoppingCount);
export default ConnectedCount;