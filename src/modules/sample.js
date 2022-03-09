import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USER = 'sample/GET_USER';
const GET_USER_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USER_FAILURE = 'sample/GET_USER_FAILURE';

//export const getPost = createRequestThunk(GET_POST, api.getPost);
//export const getUser = createRequestThunk(GET_USER, api.getUser);

const init = {
    post: null,
    user: null,
    loading: {
    GET_POST: false,
    GET_USER: false,
    },
}

const sample = handleActions({
    [GET_POST]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: true,
        },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
        ...state,
        post: action.payload,
        loading: {
            ...state.loading,
            GET_POST: false,
        },
    }),
    [GET_USER]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USER: true,
        },
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
        ...state,
        user: action.payload,
        loading: {
            ...state.loading,
            GET_USER: false,
        },
    }),
}, init);

export default sample;