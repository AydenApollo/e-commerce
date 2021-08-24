import React, { Component } from 'react';
import { connect } from 'react-redux'
import shoesData from './shoes.json'


import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class Shoes extends Component {
        render () {
              return (
            <div className="shoesPictures">
            <h1>Welcome Shopper</h1>
            <ImageList rowHeight={180} className="shoesPictures">
                <ImageListItem key="Subheader" cols={2} style={{height: 'auto' }}>
                    <ListSubheader component="div">Shopping Criteria</ListSubheader>
                </ImageListItem>
                {shoesData.map((item) => (
                    <ImageListItem key={item.image}>
                        <img src={item.image} alt={item.title}/>
                        <ImageListItemBar
                        title={item.title}
                        subtitle={<span>Cost: {item.subtitle}</span>}
                        actionIcon={
                            <IconButton aria-label={`Shop ${item.title}`}>
                                <AddShoppingCartIcon/> 
                            </IconButton>
                        }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

var ConnectedShoes = connect(mapStateToProps)(Shoes)
export default ConnectedShoes