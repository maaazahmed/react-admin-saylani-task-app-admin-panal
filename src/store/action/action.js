import ActionTypes from "../constant/constant"





export const currentUserAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CURRENT_USER,
            payload: data
        })
    }
}



export const userListAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.USER_LIST,
            payload: data
        })
    }
}


export const categoryListAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CATEGORY_LIST,
            payload: data
        })
    }
}



export const selectedUserForMsg_Action = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.SELECTED_USER_FOR_MESSAGE,
            payload: data
        })
    }
}


export const messageListAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.MESSAGE_LIST,
            payload: data
        })
    }
}


