import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./index.css"
import AddCategory from "./AddCategory/index"
import Users from "./Users/index"
import CategoryList from "./CategoryList/index"
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import history from "./../../History"




const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navBtn: {
        color: "#fff",
        textTransform: "capitalize",
        marginRight: 40
    }
};



class Dashboard extends Component {
    logOut(){
        history.push("/")
    }
    
    render() {
        return (
            <div className="dashboard-container" >
                <Router>
                    <div>
                        <div className={styles.root} >
                            <AppBar position="static">
                                <Toolbar style={{ backgroundColor: "#512da7", display: "flex", justifyContent: "space-between" }} >
                                    <Typography variant="h6" color="inherit" className={styles.grow}>
                                        ADMIN
                                </Typography>
                                    <div>
                                        <Link to="/Dashboard/AddCategory" >
                                            <Button style={styles.navBtn} color="inherit">Add Catogory</Button>
                                        </Link>
                                        <Link to="/Dashboard/CategoryList" >
                                            <Button style={styles.navBtn} color="inherit">Catogory</Button>
                                        </Link>
                                        <Link to="/Dashboard" >
                                            <Button style={styles.navBtn} color="inherit">User</Button>
                                        </Link>
                                        <Button onClick={this.logOut.bind()} color="inherit">LOG OUT</Button>
                                    </div>
                                </Toolbar>
                            </AppBar>
                        </div>
                        <div>
                            <Route exact path="/Dashboard" component={Users} />
                            <Route exact path="/Dashboard/AddCategory" component={AddCategory} />
                            <Route exact path="/Dashboard/CategoryList" component={CategoryList} />
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}


export default withStyles(styles)(Dashboard);

