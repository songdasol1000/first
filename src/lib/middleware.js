const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action && action.type);
    console.log('이전상태: ', store.getState());
    console.log('액션: ', action);
    next(action); //실행을 한다.
    console.log('현재 상태: ', store.getState());
    console.groupEnd(); //이렇게 하나의 그룹으로 묶음
};

export default loggerMiddleware;