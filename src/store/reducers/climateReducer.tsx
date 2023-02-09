import { ERROR_INFO_API, GET_INFO_API, LOADING_INFO_API } from "../types";

const initialState = {
    climas: [],
    loading: false,
    error: false,
};

export const climateReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_INFO_API:
            return {
                ...state,
                climas: action.payload,
                loading: false,
            };
        case LOADING_INFO_API:
            return {
                ...state,
                loading: !state.loading,
            };
        case ERROR_INFO_API:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}