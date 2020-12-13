import './App.css';
import TodoInput from './components/TodoContents/TodoInput';
import TodoList from './components/TodoContents/TodoList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from './redux/actions';
import Modal from './components/modal/Modal'

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
    <div className="App m-5" style={{backgroundColor: 'transparent'}}>
        <Modal />
        <TodoInput />
        {todos.isLoading===false &&  <TodoList /> }
    </div>
  );
}

export default App;