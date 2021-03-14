import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  addTodoAction  from '../../Redux/Actions/AddTodoAction';
const AddTodo = ({addTodo}) => {
    const handleAddTodo = (e) => {
        if (e.key === 'Enter') {
            addTodo({ workName: e.target.value })
            e.target.value = null;
        }
    }
        return (
            <input 
                type="text" 
                className="search" 
                placeholder="Enter Your Work Here" 
                onKeyDown={event => handleAddTodo(event)} 
            />
        )
}
const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ addTodo: addTodoAction }, dispatch)
}
export default connect(null, mapDistachToProps)(AddTodo)