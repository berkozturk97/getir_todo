import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from './redux/actions';

function App() {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state);
  useEffect(()=>{
    const loadData = async () => {
      await dispatch(getTodo());
    };
    loadData();
   },[dispatch]);

  return (
    <div className="App m-5">
        <TodoInput />
        {todos.isLoading===false &&  <TodoList /> }
    </div>
  );
}

export default App;