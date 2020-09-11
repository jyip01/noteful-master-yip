import React, {Component} from 'react'
import ApiContext from '../../ApiContext'
import config from '../../config'
import {Link} from 'react-router-dom'
import ValidationError from './ValidationError'
import './AddNote.css'
import BackButton from '../BackButton/BackButton'
import Error from '../../Error.js'


class AddNote extends Component{
    static contextType = ApiContext;

    handleSubmit(e){
        e.preventDefault()
    }

    makeDate (){
        let d = new Date()
        let day= d.toDateString()
        return(day)
    }

    setDate(){
        console.log('date')
    }

    validateNoteName(){
        const name = this.state.noteName.value
        if(name.length===0){
            return 'Note name is required.'
        }
    }

    updateNoteName(noteName){
        this.setState({noteName: {value:noteName,touched:true}})
    }

    validateFolder(){
        const folder = this.state.folder.value
        if(folder===""){
            return 'Folder selection is required.' 
        }
    }

    updateFolder(folderName){
        this.setState({folder: {value:folderName,touched:true}})
    }

    validateContent(){
        const content = this.state.content.value
        if(content.length===0){
            return 'Content is required.' 
        }
    }

    updateContent(content){
        this.setState({content: {value:content,touched:true}})
    }

    constructor(props){
        super(props)
        this.state={
            noteName: {
                value: '',
                touched: false
            },
            folder: {
                value: '',
                touched:false
            },
            content: {
                value: '',
                touched:false,
            },
            date: ''
        }
    }


    makeSubmitButton(){
        if(this.validateNoteName() || this.validateFolder() || this.validateContent()){
            return <Link onClick={()=>{this.context.setFolder({})}} className="formSubmitLink" to="/">
                <button type="submit" 
                    className="formSubmit disabled" 
                    disabled={this.validateNoteName() || this.validateFolder() || this.validateContent() }
                    onClick={()=>this.addNoteRequest(this.state.noteName.value,this.state.folder.value,this.state.content.value,this.context.addNote)} 
                >
                    Submit
                </button>
            </Link>
        }
        else{
            return <Link onClick={()=>{this.context.setFolder({})}} className="formSubmitLink" to="/"><button type="submit" className="formSubmit notDisabled" onClick={()=>this.addNoteRequest(this.state.noteName.value,this.state.folder.value,this.state.content.value,this.context.addNote)} >
                Submit</button>
            </Link>
        }
    }
    

        addNoteRequest(noteName,folderId,content,callback){
            
        function makeDate (){
            let d = new Date()
            let day= d.toDateString()
            return(day)
        }
    
        let date = makeDate()
        
    
        fetch(`${config.API_ENDPOINT}/notes`,{
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify({"name":noteName,"folderid":folderId,"content":content,"modified":date})
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
                            <form className="newNote">
                                <p className="formTitle">Create a New Note</p>
                                <div className="form-group" onSubmit={e=>this.handleSubmit(e)}>
                                    <label htmlFor="noteName">Note Name*</label>
                                    <input type="text" name="noteName" id="noteName" onChange={e=>this.updateNoteName(e.target.value)}/>
                                    {this.state.noteName.touched && (<ValidationError message={this.validateNoteName()}/>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="folder">Folder*</label>
                                    <select name="folder" id="folder" onChange={e=>this.updateFolder(e.target.options[e.target.selectedIndex].value)}>
                                        <option value="">Select a folder</option>
                                        {this.context.folders.map((folder,index)=>{
                                            return <option value={folder.id} key={index}>{folder.name}</option>
                                        })}
                                    </select>
                                    {this.state.folder.touched && (<ValidationError message={this.validateFolder()}/>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="content">Content*</label>
                                    <input type="text" name="content" id="content" onChange={e=>this.updateContent(e.target.value)} />
                                    {this.state.content.touched && (<ValidationError message={this.validateContent()}/>)}
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

export default AddNote

