import React, {Component} from 'react';
import HomeSideBar from '../HomeSideBar/HomeSideBar'
import FolderMain from '../FolderMain/FolderMain'
import ApiContext from '../../ApiContext'
import Error from '../../Error.js'

class FolderPage extends Component {
    static contextType = ApiContext;
        
    //for refreshing
        componentDidMount(){
            if(!this.context.notes.length || !this.context.folders.length || !this.context.currentFolder){
                this.context.fetchData()
            }
        }
    
        componentWillUpdate(nextprops){
           console.log(nextprops)
            if(!this.context.currentFolder){
                       
                const {props: {match}} = nextprops
                const folder = this.context.folders.find(f =>
                f.id === match.params.folderId)
            
            this.context.setFolder(folder)
            }
     
        }
    

    render(){
        if(!this.context.folders.length || !this.context.notes.length || !this.context.currentFolder){
            return null
        }
        
        return(<Error>
            <div className="contentContainer folderPage">
                <HomeSideBar/>
                <FolderMain/>
            </div>
        </Error>
        )
    }
}

export default FolderPage