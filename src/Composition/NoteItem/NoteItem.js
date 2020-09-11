import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import DeleteButton from '../DeleteButton/DeleteButton'
import ApiContext from '../../ApiContext'
import './NoteItem.css'
import PropTypes from 'prop-types';

class NoteItem extends Component {
    static contextType = ApiContext;
    render(){
        function makeDate (modified){
            let d = new Date(modified)
            let day= d.toDateString()
            return(day)
        }
        
        let date = makeDate(this.props.note.modified)
        
        return(<div className="noteItem">
            <div className="noteInfo">
                <Link className="noteName" to={`/note/${this.props.note.id}`} onClick={()=>{this.context.setNote(this.props.note)}}>{this.props.note.name}</Link>
                <p className="date">Date modified on {date} </p>
            </div>
            <DeleteButton noteId = {this.props.note.id}/>
        </div>)
        
    }
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}


export default NoteItem