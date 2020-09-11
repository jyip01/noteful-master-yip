import React, {Component} from 'react';
import DeleteButton from '../DeleteButton/DeleteButton'
import ApiContext from '../../ApiContext'


class NotePageItem extends Component {
    static contextType = ApiContext;
    render(){

        function makeDate (modified){
            let d = new Date(modified)
            let day= d.toDateString()
            return(day)
        }
        
        let date = makeDate(this.context.currentNote.modified)
        
        return(
        <div className="noteItem">
            <div className="noteInfo">
                <p className="noteName">{this.context.currentNote.name}</p>
                <p className="date">Date modified on {date} </p>
            </div>
            <DeleteButton noteId = {this.context.currentNote.id}/>
        </div>)
    }
}

export default NotePageItem