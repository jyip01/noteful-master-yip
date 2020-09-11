import React, {Component} from 'react';
import ApiContext from '../../ApiContext'
import NotePageItem from '../NotePageItem/NotePageItem'
import './NoteMain.css'

class NoteMain extends Component {
    static contextType = ApiContext;
    
    render(){

        return(<div className="main">
            <NotePageItem/>
            <p className="content">{this.context.currentNote.content}</p>
        </div>
        )
    }
}

export default NoteMain