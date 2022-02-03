import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data, loading: false, errors: null };
        case actionType.LOGOUT:
            localStorage.clear();

            return { ...state, authData: null, loading: false, errors: null };
        case actionType.ERROR:
            return { ...state, authData: null, loading: false, errors: action.errorMessage };
        case actionType.UPDATE_PASS:
            return state;
        default:
            return state;
    }
};

export default authReducer;
