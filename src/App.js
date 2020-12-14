import './App.css';
import TodoInput from './components/TodoContents/TodoInput';
import TodoList from './components/TodoContents/TodoList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from './redux/actions';
import Modal from './components/modal/Modal'
import Loading from './components/Loading/Loading';

function App() {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state);
  useEffect(() => {
    const loadData = async () => {
      await dispatch(getTodo());
    };
    loadData();
  }, [dispatch]);

  function renderScreen() {
    if (todos.isLoading === false) {
      return (
        <>
          <Modal />
          <TodoInput />
          <TodoList />
        </>
      )
    }
    else {
      return <Loading />
    }
  }


  return (
    <div className="App m-5" style={{ backgroundColor: 'transparent' }}>
      {renderScreen()}
    </div>
  );
}

export default App;