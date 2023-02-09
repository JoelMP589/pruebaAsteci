import { climateApi } from "../../api/climateApi";
import { AppDispatch } from "../store";
import { ERROR_INFO_API, GET_INFO_API } from "../types";

export const climateSearch = (pageSize: number = 10, page: number) => async (dispatch: AppDispatch) => {
    try {
        const res = await climateApi.get(`?pageSize=${pageSize}&page=${page}`)
        dispatch({
            type: GET_INFO_API,
            payload: res.data.results
        })
    } catch (error) {
        dispatch({
            type: ERROR_INFO_API,
            payload: true
        })
    }
}
