import axios from "axios";
import { POST_ERROR, GET_POSTS } from "./types";

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/`);
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: "Fetching Users Failed" },
        });
    }
};


//AN EXAMPLE ACTION FILE FOR REDUX