import React, { Component } from 'react';
import "./index.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { categoryListAction } from "../../../store/action/action"
import Button from '@material-ui/core/Button';


let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}
class CategoryList extends Component {
    componentWillMount() {
        fetch("http://localhost:8000/getCategory", {
            method: "get",
        }).then((res) => res.json())
            .then((data) => {
                this.props.categoryListAction(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        // console.log(this.props.user_List.userList)
        return (
            <div className="UserContainer"   >
                <Paper >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell align="center">Discription</TableCell>
                                {/* <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Message</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.category_List.categoryList.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {row.categoryVal}
                                    </TableCell>
                                    <TableCell align="center">{row.dicription || "Empty"}</TableCell>
                                    {/* <TableCell align="center">
                                        {(true) ?
                                            <Button color="secondary">
                                                Block
                                             </Button>
                                            :
                                            <Button color="primary">
                                                Active
                                            </Button>}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color="primary">
                                            Meesage
                                         </Button>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}


const mapStateToProp = (state) => {
    return ({
        category_List: state.root,
        // currentUser: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        categoryListAction: (data) => {
            dispatch(categoryListAction(data))
        },

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(CategoryList)