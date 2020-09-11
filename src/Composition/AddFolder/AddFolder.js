import React, {Component} from 'react'
import ValidationError from './ValidationError'
import ApiContext from '../../ApiContext'
import config from '../../config'
import {Link} from 'react-router-dom'
import BackButton from '../BackButton/BackButton'
import './AddFolder.css'
import Error from '../../Error.js'


class AddFolder extends Component{
    static contextType = ApiContext;

    validateFolderName(){
        const folderName = this.state.folderName.value
        if(folderName.length===0){
            return 'Folder name is required.' 
        }
    }

    constructor(props){
        super(props)
        this.state={
            folderName: {
                value: '',
                touched: false
            }
        }
    }

    updateFolderName(folderName){
        this.setState({folderName: {value:folderName,touched:true}})
    }

    makeSubmitButton(){
        if(this.validateFolderName()){
            return <Link onClick={()=>{this.context.setFolder({})}} className="formSubmitLink" to='/'><button  disabled={this.validateFolderName()} className="formSubmit disabled" type="submit" onClick={()=>this.addFolderRequest(this.state.folderName.value, this.context.addFolder)}>Submit</button></Link>
        }
        else{
            return <Link onClick={()=>{this.context.setFolder({})}} className="formSubmitLink" to='/'><button className="formSubmit notDisabled" type="submit" onClick={()=>this.addFolderRequest(this.state.folderName.value, this.context.addFolder)}>Submit</button></Link>
        }
    }

    addFolderRequest(folderName, callback){
        fetch(`${config.API_ENDPOINT}/folders`,{
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify({"name":folderName})
        })
        .then(res=>{
            if(!res.ok){
                return res.json().then(error=>{
                    throw error
                })
            }
            return res.json()
        })
        .then(data=>{
            callback(data)

        })
        .catch(error=>{
            console.error(error)
        })
    }


    render(){

        return(
            <ApiContext.Consumer>
                {(context)=>(<Error>
                <div className="contentContainer">
                    <div className="sideBar formSideBar">
                        <BackButton/>
                    </div>
                    <div className="main">
                        <form className="newFolder">
                            <p className="formTitle">Create a New Folder</p>
                            <div className="form-group">
                                <label htmlFor="folderName">Folder Name*</label>
                                <input type="text" name="folderName" id="folderName" onChange={e=>this.updateFolderName(e.target.value)}/>
                                {this.state.folderName.touched && (<ValidationError message={this.validateFolderName()}/>)}
                            </div>
                            {this.makeSubmitButton()}    
                        </form>
                    </div>
                    
                </div>
                </Error>
                )}
            </ApiContext.Consumer>
            
        )
    }
}

export default AddFolder

