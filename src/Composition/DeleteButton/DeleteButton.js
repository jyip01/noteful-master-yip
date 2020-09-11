import React, {Component} from 'react';
import ApiContext from '../../ApiContext'
import config from '../../config'
import {Link} from 'react-router-dom'
import './DeleteButton.css'
import PropTypes from 'prop-types';


class DeleteButton extends Component {
    static contextType = ApiContext;
    
    render(){

        function deleteNoteRequest(noteId, callback){
            fetch(`${config.API_ENDPOINT}/notes/${noteId}`,{
                method: 'DELETE',
                headers: {
                    'content-type':'application/json'
                },
            })
            .then(res=>{
                if(!res.ok){
                    return res.json().then(error=>{
                        throw error
                    })
                }
                return res
            })
            .then(data=>{
                callback(noteId)
            })
            .catch(error=>{
                console.error(error)
            })
        }

        return(
            <ApiContext.Consumer>
                {(context)=>(
                    <Link to="/"><button className="deleteButton" onClick={()=>{deleteNoteRequest(this.props.noteId, context.deleteNote)}}>Delete Note</button></Link>
                )}
            </ApiContext.Consumer>
        )
    }
}

DeleteButton.propTypes = {
    noteId: PropTypes.number.isRequired
}

export default DeleteButton