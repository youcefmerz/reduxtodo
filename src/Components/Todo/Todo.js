import React from 'react';

const Todo = ({item}) => {
        return (
            <div className="to-do">
                <span className="to-do-name">{item.workName}</span>
            </div>
        );
}
export default Todo;