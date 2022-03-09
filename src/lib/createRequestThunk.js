//차이점 찾고 (매개변수)
// 그 처리를 붙이면 됨

import { finishLoading, startLoading } from "../modules/loading";

export const createActionType = (type)=>{
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [type, SUCCESS, FAILURE];
}

export default function createRequestThunk(type, request) { // 리펙토링 할때, 서로 다른 부분이 매개변수
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return (param) => async dispatch => { //param는 id임 
        dispatch({ type }); // type: type
        dispatch(startLoading(type));
        try {
            //요청 성공
            console.log(param);
            const res = await request(param);
            console.log(res);
            dispatch({
                type: SUCCESS,
                payload: res.data
            });
            dispatch(finishLoading(type));
        } catch (error) {
            //요청 실패(에러)
            dispatch({
                type: FAILURE,
                payload: error,
                error: true
            });
            dispatch(startLoading(type));
            throw error;
        }
    };
}