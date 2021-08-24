import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import clothespic from './assets/clothespic.jpg';
import shoespic from './assets/shoespic.png';
import techpic from './assets/techpic.jpg';
import miscpic from './assets/miscpic.jpg';





  

class WelcomePage extends Component {
    render() {
        return (
            <Box component="div" whiteSpace="normal">
                <NavLink to='/clothes' className="clothes-button"><a href="" className="clothes-button"><img className="clothes-button" src={clothespic} alt="picture of clothes" height={550} width={550}/></a></NavLink>
                <NavLink to='/shoes' className="shoes-button"><a href="" className="shoes-button"><img className="shoes-button" src={shoespic} alt="picture of shoes" height={550} width={550}/></a></NavLink>
                <NavLink to='/tech' className="tech-button"><a href="" className="tech-button"><img className="tech-button" src={techpic} alt="picture of tech" height={550} width={550}/></a></NavLink>
                <NavLink to='/misc' className="misc-button"><a href="" className="misc-button"><img className="misc-button" src={miscpic} alt="picture of misc items" height={550} width={550}/></a></NavLink>
            </Box>
        )
    }
}



function mapStateToProps (state) {
    return {}
}




var ConnectedWelcomePage = connect(mapStateToProps)(WelcomePage)
export default ConnectedWelcomePage
        