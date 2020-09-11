import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import './HomeMain.css'
import ApiContext from '../../ApiContext'


class HomeMain extends Component {
    static contextType = ApiContext;
    render(){
        return(<div className="main">
            {this.context.notes
                .map((note,index)=>{
                    return(<NoteItem note={note} key={index}/>)
                })}
            <AddNoteButton/>
        </div>
        )
    }
}

export default HomeMain