import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';



class ViewCart extends Component {
    render() {
        return (
            <div>
                 <ImageList rowHeight={550} className= "">
                    <ImageListItem key="Subheader" cols={2} style={{height: 'auto' }}>
                        <ListSubheader component="div">In Your Cart</ListSubheader>
                    </ImageListItem>
                {this.props.cart_list.map((item) => (
                        <ImageListItem key={item.image}>
                        <img src={item.image} alt={item.title}/>
                        <ImageListItemBar
                        title={item.title}
                        subtitle={<span>Cost: {item.subtitle}</span>}/>
                    </ImageListItem>
                ))}
                </ImageList>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {cart_list: state.cart_list}
}

var connectedViewCart = connect(mapStateToProps)(ViewCart);
export default connectedViewCart