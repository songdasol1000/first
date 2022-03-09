import React, { Fragment, useState } from 'react';
import Error from './Error';


function Greeting () {
    //비구조화 할당
    const [greeting, setGreeting] = useState('');
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false); 
    const [error, setError] = useState({error:false, msg:''});

    const handleChange = (e) => {
        setError({error:false, msg:''}) 
        setGreeting(e.target.value);
    }
    
    const handleClick = () => {
        if(greeting === ""){
            setError({error:true, msg:'내용을 입력해주세요'});
            return;
        } else if(greeting.length > 15) {
            setError({error:true, msg:'이름이 어떻게 15자예요?'});
            return;
        } else {
            //do nothing.
        }
         setShow(!show);
    };
    
        
         if(show){
            return <h1>{`Hello, ${greeting}`}</h1>;
        } else {
            return (
                <>
                    <div>
                    <p>Can you tell me your name?!</p>
                    <input 
                        type="text" 
                        placeholder='例> John Doe'
                        value={greeting} 
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Continue</button>
                    {/* <div>
                        <button onClick={()=>{setNum(num-1)}}> -1 </button>
                        <span>{num}</span>
                        <button onClick={()=>{setNum(num+1)}}> +1 </button>
                    </div> */}
                    </div>
                  {error.error && <Error error={error}/>}
                </>
            );
        }
    }

export default Greeting;