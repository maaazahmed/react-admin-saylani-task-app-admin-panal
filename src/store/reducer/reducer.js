import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userList: [],
    categoryList: [],
    selectedUserForMsg:{},
    currentUser:{},
    messaageList:[]
}

// MESSAGE_LIST


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ActionTypes.USER_LIST:
            return ({
                ...state,
                userList: action.payload
            })

        case ActionTypes.CATEGORY_LIST:
            return ({
                ...state,
                categoryList: action.payload
            })
        case ActionTypes.SELECTED_USER_FOR_MESSAGE:
            return ({
                ...state,
                selectedUserForMsg: action.payload
            })
            case ActionTypes.CURRENT_USER:
            return ({
                ...state,
                currentUser: action.payload
            })

            case ActionTypes.MESSAGE_LIST:
            return ({
                ...state,
                messaageList: action.payload
            })

        default:
            return state;
    }

}

