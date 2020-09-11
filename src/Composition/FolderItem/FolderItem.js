import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FoldersItem.css';
import ApiContext from '../../ApiContext'
import PropTypes from 'prop-types';

class FolderItem extends Component {
    static contextType = ApiContext;

        checkFolder=()=>{
            
            if(this.context.currentFolder===null){
                return <li className="folderButton">
                {this.props.folder.name}</li>
            }
            
            else if(this.context.currentFolder !==null){
                if(this.context.currentFolder.id === this.props.folder.id){
                    return <li className="currentFolder folderButton">
                    {this.props.folder.name}
                </li>
                        
                }
            else{
                return <li className="folderButton">
                {this.props.folder.name}
            </li>

            }

        }

        }

    render(){

        return(
            <Link className="folderButtonLink" to={`/folder/${this.props.folder.id}`} onClick={()=>{this.context.setFolder(this.props.folder)}}>
                {this.checkFolder()}
            </Link>
        )
        
    }
}

FolderItem.propTypes = {
    folder: PropTypes.object.isRequired
}


export default FolderItem