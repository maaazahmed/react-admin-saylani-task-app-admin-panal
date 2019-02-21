import React, { Component } from 'react';
import "./index.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import firebase from "firebase"
import { selectedUserForMsg_Action, messageListAction, userListAction } from "../../../store/action/action"


class UserList extends Component {

    constructor() {
        super()
        this.state = {
            chatBoxShow: false,
            messageText: "",
            userForMesg: ""
        }
    }



    componentWillMount() {
        fetch("http://localhost:8000/getUsers", {
            method: "get",
        }).then((res) => res.json())
            .then((data) => {
                this.props.userListAction(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    setStatus(data, statusData) {
        console.log(data)
        fetch("http://localhost:8000/setStatus", {
            method: "post",
            body: JSON.stringify({ uid: data.uid, statusData }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((suc) => {
            console.log(suc.status)
            if (suc.status == 200) {
                alert("Successful")
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    // componentDidMount() {
    //     const database = firebase.database().ref("/")
    //     const currentUser = this.props.currentUser.currentUser;
    //     const resever = this.props.selectedUser.selectedUserForMsg
    //     const obj = {
    //         senderId: currentUser.uid,
    //         reseverId: resever.uid,
    //     }

    //     let arr = []
    //     database.child(`rooms/${obj.senderId}/messages/${obj.reseverId}/`).on("value", (snap) => {
    //         var messages = snap.val()
    //         console.log(messages)
    //         for (var key in messages) {
    //             arr.push({ ...messages[key], key })
    //         }
    //         this.props.messageListAction(arr)
    //         console.log(arr)
    //     })
    // }



    onpenChatBox(data) {
        this.props.selectedUserForMsg_Action(data)
        this.setState({
            chatBoxShow: true,
            userForMesg: data.username
        })
    }

    // _onChange(ev) {
    //     this.setState({
    //         messageText: ev.target.value
    //     })
    // }
    // sendessage(e) {
    //     const database = firebase.database().ref("/")
    //     e.preventDefault();
    //     const currentUser = this.props.currentUser.currentUser;
    //     const resever = this.props.selectedUser.selectedUserForMsg
    //     const obj = {
    //         senderId: currentUser.uid,
    //         reseverId: resever.uid,
    //         messageText: this.state.messageText
    //     }
    //     database.child(`rooms/${obj.senderId}/messages/${obj.reseverId}/`).push(obj)
    //     database.child(`rooms/${obj.reseverId}/messages/${obj.senderId}/`).push(obj)


    // }





    render() {
        console.log(this.props.messageList)
        return (
            <div className="UserContainer"   >
                <Paper >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone No</TableCell>
                                <TableCell align="center">Status</TableCell>
                                {/* <TableCell align="center">Message</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.user_List.userList.map((row, index) => {
                                console.log(row.status == "Active")
                                return (

                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {row.username}
                                        </TableCell>
                                        <TableCell align="center">{row.emailForUser || "Empty"}</TableCell>
                                        <TableCell align="center">{row.phoneNumber || "Empty"}</TableCell>
                                        <TableCell align="center">
                                            {(row.status == "Active") ?
                                                <Button onClick={this.setStatus.bind(this, row, "Block")} color="secondary">
                                                    Block
                                             </Button>
                                                :
                                                <Button onClick={this.setStatus.bind(this, row, "Active")} color="primary">
                                                    Active
                                            </Button>}
                                        </TableCell>
                                        {/* <TableCell align="center">
                                            <Button
                                                onClick={this.onpenChatBox.bind(this, row)} color="primary">
                                                Meesage
                                         </Button>
                                        </TableCell> */}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                {/* {(this.state.chatBoxShow) ?
                    <div className="chatBoxContainer" >
                        <div className="headingContainer" >
                            <h5 style={{ color: "#ffffff" }} >{this.state.userForMesg}</h5>
                            <div onClick={() => this.setState({ chatBoxShow: false })} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" ><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            </div>
                        </div>
                        <div className="messagelisContainer" >
                        </div>
                        <div className="inputBoxContainer" >
                            <form
                                method="get"
                                onSubmit={this.sendessage.bind(this)}
                                className="messageInput" >
                                <input
                                    value={this.state.messageText}
                                    onChange={this._onChange.bind(this)}
                                    type={"text"}
                                    placeholder="Message"
                                    className="messageInputText" />
                            </form>
                        </div>
                    </div> : null} */}



            </div>
        );
    }
}


const mapStateToProp = (state) => {
    return ({
        user_List: state.root,
        selectedUser: state.root,
        currentUser: state.root,
        messageList: state.root,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        userListAction: (data) => {
            dispatch(userListAction(data))
        },

        selectedUserForMsg_Action: (data) => {
            dispatch(selectedUserForMsg_Action(data))
        },
        messageListAction: (data) => {
            dispatch(messageListAction(data))
        },

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(UserList)






















