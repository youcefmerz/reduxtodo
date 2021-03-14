import React from 'react'
import Todo from '../Todo/Todo'
import { connect } from 'react-redux'
const TodoList = ({items}) => {
        return (
            <div className="to-do-list">
                <span>
                    {
                        items.map((element, index) => {
                            return <Todo item={element} key={index} index={index} />;
                        })
                    }
                </span>
            </div>
        )
}
const mapStateToProps = () => state => {
    return {
        items: state.todoList
    };
};
export default connect(mapStateToProps, null)(TodoList);