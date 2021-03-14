import { combineReducers } from 'redux';
import todoListReducer from './TodoListReducer';
const rootReducer = combineReducers({
    todoList: todoListReducer
});
export default rootReducer;