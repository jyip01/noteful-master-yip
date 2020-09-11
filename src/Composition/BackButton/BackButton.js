import React, {Component} from 'react';
import './BackButton.css'
import ApiContext from '../../ApiContext'
import {Link} from 'react-router-dom';

class BackButton extends Component {
    static contextType = ApiContext;
    
    render(){

        return(
            <ApiContext.Consumer>
                {(context)=>(
                <Link to="/" className="backButton">Go back</Link> 
                )}
            </ApiContext.Consumer>
        )
    }
}

export default BackButton