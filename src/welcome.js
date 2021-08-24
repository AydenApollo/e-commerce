import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import clothespic from './assets/clothespic.jpg';
import shoespic from './assets/shoespic.png';
import techpic from './assets/techpic.jpg';
import miscpic from './assets/miscpic.jpg';





  

class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Images">
                <NavLink to='/clothes' className="clothes-button"><a href="" className="clothesPic"><img className="clothesPic" src={clothespic} alt="picture of clothes"/></a></NavLink>
                <NavLink to='/shoes' className="shoes-button"><a href="" className="shoesPic"><img className="shoesPic" src={shoespic} alt="picture of shoes"/></a></NavLink>
                <NavLink to='/tech' className="tech-button"><a href="" className="techPic"><img className="techPic" src={techpic} alt="picture of tech"/></a></NavLink>
                <NavLink to='/tech' className="misc-button"><a href="" className="miscPic"><img className="miscPic" src={miscpic} alt="picture of misc items"/></a></NavLink>
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
        