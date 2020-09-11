import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import ApiContext from '../../ApiContext'

class Header extends Component {
    
    static contextType = ApiContext;

    render(){
        return(
            <ApiContext.Consumer>
            {(context)=>(
                        <header>
                        <div></div> 
                        <Link to="/" onClick={()=>{this.context.setFolder(null)}}>
                            Noteful
                        </Link>
                    </header>
            )}
            </ApiContext.Consumer>
            
        )
    }
}

export default Header



/*//empty div for styling purposes
<header>
<div></div> 
<Link to="/" onClick={()=>{this.context.setFolder(null)}}>
    Noteful
</Link>
</header>*/