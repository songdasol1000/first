import React, { useEffect, useState } from 'react';

function LifeCycleTest() {
    const [num, setNum] = useState(0);

    //의존성이없어져서 DidMount같은역할
    //컴포넌트가 화면에 등장할 때, 딱 한번 callback을 실행시키는 것
    useEffect(()=>{
        setNum(num+1); 
        console.log('지금 마운트 된듯')
    },[]);
    
    //willUnmount역할
    //컴포넌트가 화면에서 사라지기전에, callback을 실행시는것
    useEffect(()=>{    
        const a = setInterval(()=>{console.log(Date())}, 1000);
        return ()=>{
            console.log('안녕히계세요 여러분')
            clearInterval(a); //뒷처리함수
        }
    },[]);

    //num이라는 것에 의존하게 돼서 계속 불려가서 DidUpdate같은 역할
    //특정 값(state)이 변경될 때마다 callback을 실행시키는것
    useEffect(()=>{
        console.log('지금 업데이트 됨')
    },[num]);

    return <div>{num}
    <button onClick={()=>setNum(num+1)}>증가</button></div>

}

export default LifeCycleTest;