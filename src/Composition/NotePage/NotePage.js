import React, {Component} from 'react';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import NoteMain from '../NoteMain/NoteMain'
import ApiContext from '../../ApiContext'
import Error from '../../Error.js'


class NotePage extends Component {
    static contextType = ApiContext;
    
    //for refreshing
    componentDidMount(){
        if(!this.context.notes.length || !this.context.folders.length || !this.context.currentNote){
            this.context.fetchData()
        }
    }

    componentWillUpdate(nextprops){
       

        if(!this.context.currentNote){
            const {props: {match}} = nextprops
            const note = this.context.notes.find(n =>
                n.id === match.params.noteId)
                
            this.context.setNote(note)
        }
 
    }

    render(){

        //for refreshing - wont return error on refresh
        if(!this.context.notes.length || !this.context.folders.length || !this.context.currentNote){
            return null
        }
        
        return(<Error>
        <div className="contentContainer">
           <NoteSideBar/>
            <NoteMain/> 
        </div>
        </Error>
        )
    }
}

export default NotePage
