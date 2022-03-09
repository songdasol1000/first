import { createAction, handleActions } from "redux-actions";

// 1. 액션타입을 정의한다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const RESET = "counter/RESET";

// 2. 액션생성 함수를 만든다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const reset = createAction(RESET); 

// 3. state, state를 변경시킬 Reducer
const init = {
    number: 0,
};

const counter = handleActions(
{
    [INCREASE]: (state) => ({number: state.number + 1}),
    [DECREASE]: (state) => ({number: state.number - 1}),
    [RESET]: (state) => init
},
init
);

export default counter;