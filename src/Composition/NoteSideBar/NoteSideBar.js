import React, {Component} from 'react';
import ApiContext from '../../ApiContext'
import './NoteSideBar.css'
import BackButton from '../BackButton/BackButton'

class NoteSideBar extends Component {
    static contextType = ApiContext;
    render(){

        let folder = this.context.folders.find((item)=>{
            return item.id===this.context.currentNote.folderid
        }) 

        let folderName = folder.name


        return(<div className="sideBar noteSideBar">
            <BackButton/>
            <p>{folderName}</p>
        </div>          
        )
    }
}

export default NoteSideBar