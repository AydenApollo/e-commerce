import React, { Component } from 'react';
import { connect } from 'react-redux'
import clothesData from './clothes.json'

import './Clothes.css'
import {addItem} from './actions.js'

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class Clothes extends Component {
    constructor(props) {
        super(props);
        this.state = {item: ""};
    }
    handleSubmit(event, index) {
        event.preventDefault();
        this.props.addItem({index})
    }
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
                                <IconButton aria-label={`Shop ${item.title}`} className="clothesPictures" onClick={(e) => this.handleSubmit(e)}>
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

function mapDipsatchToProps (dispatch) {
    return {
        addItem: function (data) {
            dispatch(addItem(data))
        }
    }
}

var ConnectedClothes = connect(mapStateToProps, mapDipsatchToProps)(Clothes)
export default ConnectedClothes