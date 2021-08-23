import React, { Component } from 'react';
import { connect } from 'react-redux';
import itemData from './itemData.json'

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



  

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        const useStyles = makeStyles((theme) => ({
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: theme.palette.background.paper,
            },
            imageList: {
              width: 500,
              height: 450,
            },
            icon: {
              color: 'rgba(255, 255, 255, 0.54)',
            },
          }));
    
    export default function TitleBarImageList() {
        const classes = useStyles()
    }}
    render() {
        return (
            <div className={classes.root}>
                <h1>Welcome Shopper</h1>
                <ImageList rowHeight={180} className={classes.imageList}>
                    <ImageListItem key="Subheader" cols={2} style={{height: 'auto' }}>
                        <ListSubheader component="div">Shopping Criteria</ListSubheader>
                    </ImageListItem>
                    {itemData.map((item) => {
                        <ImageListItem key={item.image}>
                            <img src={item.image} alt={image.title}/>
                            <ImageListItemBar
                            title={tiem.title}
                            actionIcon={
                                <IconButton aria-label={`Shop ${item.title}`} className={classes.icon}>
                                    <InfoIcon/> 
                                </IconButton>
                            }
                            />
                        </ImageListItem>
                    })}
                </ImageList>
            </div>
        )
    }
}



function mapStateToProps (state) {
    return {}
}


function mapDispatchToProps (dispatch) {
    return {
        choose_item: function (data) {
            dispatch(choose_item(data))
        }
    }
}

var ConnectedWelcomePage = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default ConnectedWelcomePage
        