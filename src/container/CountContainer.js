import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Counter from '../component/counter/Counter'
import { increase, decrease, reset } from '../modules/counter';

function CounterContainer() {
    const number = useSelector((state)=> state.counter.number);
    const dispatch = useDispatch();

    return (
    <Counter 
        number={number} 
        increase={()=>dispatch(increase())} 
        decrease={()=>dispatch(decrease())}
        reset={()=>dispatch(reset())}
    />
    );
}

export default CounterContainer;