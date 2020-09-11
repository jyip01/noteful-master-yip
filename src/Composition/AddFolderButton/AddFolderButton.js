import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AddFolder.css'


class AddFolderButton extends Component {
    
    render(){
        return(
            <Link to={`/AddFolder`} className="addFolderButton">Add folder</Link>        
        )
    }
}

export default AddFolderButton