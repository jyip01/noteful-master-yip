import React, {Component} from 'react';
import './HomePage.css'
import HomeSideBar from '../HomeSideBar/HomeSideBar';
import HomeMain from '../HomeMain/HomeMain'
import Error from '../../Error.js'


class HomePage extends Component {
    render(){
        return(<Error>
        <div className="contentContainer homePage">
                <HomeSideBar/>
                <HomeMain/>
            </div>
            </Error>
        )
    }
}

export default HomePage