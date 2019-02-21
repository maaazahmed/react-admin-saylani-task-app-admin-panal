import React, { Component } from 'react';
import "./index.css"
import history from "../../History"
import { currentUserAction } from "../../store/action/action"
import { connect } from "react-redux"


class LoginContainer extends Component {
    constructor() {
        super()
        this.state = {
            password: "",
            email: ""
        }
    }

    _onChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submit() {
        const { password, email } = this.state
        const user = {
            password,
            email
        }
        if (password !== "" && email !== "") {
            fetch("http://localhost:8000/adminlogin", {
                method: "post",
                body: JSON.stringify(user),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((res) => res.json())
                .then((data) => {
                    if(data.error){
                        alert(data.error)
                    }
                    else{
                        this.props.currentUserAction(data)
                        history.push("Dashboard")
                    }

                })
                .catch((err) => {
                    console.log(err)
                }).catch((err) => {
                    console.log(err)
                })
        }
        else {
            alert("All feilds are required")
        }
    }


    render() {
        return (
            <div className="login-container">
                <div className="loginCard" >
                    <h3 className="signheaning" >Sign In</h3>
                    <div className="input_div" >
                        <input
                            name="email"
                            onChange={this._onChange.bind(this)}
                            value={this.state.email}
                            type="email" className="texInput" />
                    </div>
                    <div className="input_div" >
                        <input name="password"
                            onChange={this._onChange.bind(this)}
                            value={this.state.password}
                            type="password" className="texInput" />
                    </div>
                    <button className="signbtn" onClick={this.submit.bind(this)} >SIGN IN</button>
                </div>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return ({
        user_List: state.root,
        selectedUser: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        currentUserAction: (data) => {
            dispatch(currentUserAction(data))
        }
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(LoginContainer)






















