import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./index.css"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import AddCategory from "./AddCategory/index"
import Users from "./Users/index"
import CategoryList from "./CategoryList/index"






export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", height: "-webkit-fill-available" }} >
                        <div style={{ width: "20%" }} >
                            <List component="nav">
                                <Link to="/Dashboard" >
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Users" />
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link to="/Dashboard/AddCategory" >
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Category" />
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link to="/Dashboard/CategoryList" >
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Categorys" />
                                    </ListItem>
                                </Link>
                            </List>
                        </div>
                        <div style={{ width: "80%", backgroundColor: "#f2f2f2" }} >
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