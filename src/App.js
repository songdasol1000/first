import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import TodoTemplate from './component/Todos/TodoTemplate';
import TodoInput from './component/Todos/TodoInput';
import TodoList from './component/Todos/TodoList';
import { Link, Route, Routes } from 'react-router-dom';
import { axios } from 'axios';
import NewsList from './component/News/NewsList';
import Categories from './component/News/Categories';
import style from 'react';
import ColorBox from './component/Colors/ColorBox';
import ColorContext, { ColorConsumer, ColorProvider } from './contexts/color';
import ColorSelector from './component/Colors/ColorSelector';
import Counter from './component/counter/Counter';
import CountContainer from './container/CountContainer';
import TodosContainer from './container/TodosContainer';
import SampleContainer from './container/SampleContainer';

// function createBulkDate() {
//   const array = [];
//   for(let i =1; i<= 2500; i++) {
//     array.push({
//         id :i,
//         text :`할 일 ${i}번`,
//         checked: false,
//       });
//   }
//   return array;
// }

function App() {
  //const [todos, setTodos] = useState(createBulkDate);
 const [todos, setTodos] = useState([]);
 const [data, setData] = useState(null);
const [category, setCategory] = useState("all");

const handleSelect = useCallback((category)=> setCategory(category),[]);

 const handleClick = async ()=> {
  try { //성공을 전제로 하는 것
    const reponse = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/58`
      );
    setData(reponse.data);
  } catch (error) {}

  //ES6문법 promise, 비동기처리를 동기처리로 몰백지옥에서 벗어나자
   //ES8 asyn/awit
   

 };

  
    // const handleAdd = useCallback( (id, text) => {
    //   setTodos((todos) =>
    //   todos.concat ({
    //       id : Date.now(),
    //       text,
    //       checked : false,
    //     })
    //   );
    // },[]);

    // const handleRemove = useCallback( (id) => {
    //   setTodos((todos) => todos.filter((todo) => todo.id !==id));
    //   },[]);

      
    // const handleUpdate = useCallback( (id, text) => { 
    //   if (text === "") {
    //     setTodos((todos) => todos.filter((todo) => todo.id !== id));
    //   }
    //   setTodos((todos) => 
    //   todos.map((todo) => (todo.id === id? {...todo, text: text} : todo))
    //   );
    // },[]);

    // useEffect(() => {
    //   const savedTodos = localStorage.getItem("todos");
    //   if (savedTodos) {
    //     const parsedTodos = JSON.parse(savedTodos);
    //     setTodos(parsedTodos);
    //   }
    // },[]);

    // useEffect(() => {
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]);
    
    // const handleToggle = useCallback( (id) => {
    //     setTodos((todos) => 
    //     todos.map((todo)=> 
    //       todo.id === id ? {...todo, checked: !todo.checked } : todo
    //       )
    //     );
    //   }, []);

  
    
    

  // const [firstNum, setFirstNum] = useState('');
  // const [secondNum, setSecondNum] = useState('');
  
  // const handleFirstNumChange = (e) => setFirstNum(e.target.value);
  // const handleSecondNumChange = (e) => setSecondNum(e.target.value);

  //const [toggle, setToggle] = useState(false);

  return (
     <div className="App">
    
      {/* <Greeting/>
      {toggle && <LifeCycleTest/>}
      <button onClick={()=>setToggle(!toggle)}>{toggle ? "닫기" : "펼치기"}</button>
      <StyledComponent/> */}
      {/*<div>
         <MusicTemplate/> 
         <Calc 
          firstNum={firstNum} 
          secondNum={secondNum} 
          firstChange={handleFirstNumChange} 
          secondChange={handleSecondNumChange}
        />
        <Result result={parseInt(firstNum) + parseInt(secondNum)}/> 
      </div> */}
      <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/todolist">할일목록</Link>
      </li>
      <li>
        <Link to="/news">뉴스목록</Link>
      </li>
      <li>
        <Link to="/sample">와우</Link>
      </li>
      <li>
        <ColorProvider>
          <ColorBox />
          <ColorSelector />
        </ColorProvider>
        </li>
      </ul>
      <CountContainer/>
   <Routes>
   <Route path="/" element={<div>여기는 홈!</div>} />
      <Route 
        path="/todolist"
        element= {    
    //     <TodoTemplate>
    //       <TodoInput handleAdd={handleAdd} />
    //       <TodoList 
    //         todos={todos} 
    //         handleRemove={handleRemove}
    //         handleUpdate={handleUpdate} 
    //         handleToggle={handleToggle}
    //         />
    // </TodoTemplate>
    <TodosContainer/>
   } /> 
        <Route 
          path="/news" 
          element={
          <div>
            <Categories category={category} handleSelect={handleSelect}/>
            <NewsList category={category}/>
          </div>
          }
        />
        <Route path='/sample' element={<SampleContainer/>}/>
    </Routes>  
    </div>
  );
}

export default App;
