import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './AddNoteButton.css'

class AddNoteButton extends Component {

    render(){
        return(
            <Link to={`/AddNote`} className="addNoteLink"><button className="addNoteButton">Add note</button></Link> 
        )
    }
}

export default AddNoteButton