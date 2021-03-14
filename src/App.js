import './App.css';
import Header from './Components/Header/header'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="to-do-container">
          <AddTodo className="search" />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
export default App;