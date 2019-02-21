import React, { Component } from 'react';
import "./index.css"
import * as firebase from 'firebase'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class AddCategory extends Component {
    constructor() {
        super()
        this.state = {
            categoryVal:"",
            dicription:"",
            file:{}

        }



    }

    submit() {
        const {categoryVal, dicription, file} = this.state;
        console.log(file)
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child('images/rivers.jpg').put(file);
        uploadTask.on('state_changed',  (snapshot) => {
            // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }},  (error) =>{
                console.log(error)
        },  () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) =>{
                console.log('File available at', downloadURL);
                const category ={
                    image:downloadURL,
                    categoryVal,
                    dicription
                }
                fetch("http://localhost:8000/addCategory",{
                    method:"post",
                    body:JSON.stringify(category),
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })

            });
        })
    }

    _onChange(ev){
       this.setState({
           [ev.target.name]:ev.target.value
       })
    }

    readFile = (er) => {
        const img = er.target.files[0]
        // let imgName = img.name.split(".")
        this.setState({
            file:img
        })
      
       
    }
    render() {
        const {categoryVal, dicription, file} = this.state;
                return(
            <div className = "addCategory-container" >



{/* <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}


                        <div className="addCategoryCard" >
                            <h3 className="addCategory-heading">Add Category</h3>
                            <input
                            value={categoryVal}
                            name="categoryVal"
                             className="inputType"
                             onChange={this._onChange.bind(this)}
                              type={"text"}
                              placeholder="Category" />
                            <br />
                            <label className="fileContainer inputType">
                                Select Image
        
                              <input type="file" id="upload" ref="upload" type="file" accept="image/*"
                                    onInput={(event) => {
                                        this.readFile(event)
                                    }}
                                    onClick={(event) => {
                                        event.target.value = null
                                    }} />

                                <svg fill="#686868" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" color="#686868" /><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" /></svg>
                            </label>
                                    <br />
        
                                    <textarea className="inputType dicription-textarea" 
                            placeholder="Discription"
                            value={dicription}
                            name="dicription"
                            onChange={this._onChange.bind(this)}
                            style={{minHeight:"200px", maxHeight:"20px", minWidth:""}} ></textarea>
                            <br />
                            <button className="signbtn" onClick={this.submit.bind(this)} >SUBMIT</button>
                        </div>
            </div>
        );
    }
}

export default AddCategory;










