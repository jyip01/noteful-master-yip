import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import ApiContext from '../../ApiContext'
import './FolderMain.css'

class FolderMain extends Component {
    static contextType = ApiContext;
    render(){
        return(<div className="folderMain"> 
            {this.context.notes
                .map((note,index)=>{
                    if (this.context.currentFolder.id===note.folderid){
                        return(<NoteItem note={note} key={index}/>)
                    }
                })
            }
            <AddNoteButton/>
        </div>
        )
    }
}

export default FolderMain