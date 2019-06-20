import { DashboardConstants } from "../Main/utils/Constants"

let initialState = {
    ticket: null
};

function DashboardReducer(state=initialState, action) {
    switch (action.type){
        case DashboardConstants.OPEN_CHAT:
        case DashboardConstants.CLOSE_CHAT:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default DashboardReducer;