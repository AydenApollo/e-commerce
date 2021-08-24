import React, { Component } from 'react';
import { connect } from 'react-redux'
import clothesData from './clothes.json'

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class Clothes extends Component {
    render() {
        return(
            <div className="clothesPictures">
                <h1>Welcome Shopper</h1>
                <ImageList rowHeight={180} className= "clothesPictures">
                    <ImageListItem key="Subheader" cols={2} style={{height: 'auto' }}>
                        <ListSubheader component="div">Shopping Criteria</ListSubheader>
                    </ImageListItem>
                    {clothesData.map((item) => (
                        <ImageListItem key={item.image}>
                            <img src={item.image} alt={item.title}/>
                            <ImageListItemBar
                            title={item.title}
                            subtitle={<span>Cost: {item.subtitle}</span>}
                            actionIcon={
                                <IconButton aria-label={`Shop ${item.title}`} className="clothesPictures">
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

var ConnectedClothes = connect(mapStateToProps)(Clothes)
export default ConnectedClothes