import React from "react";
import { FaCheck, FaPen, FaTrash } from 'react-icons/fa';

export default class Todo extends React.Component {
    render() {
        const { task, toggleComplete, deleteTodo, EditTodo } = this.props;

        return (
            <div className="Todo">
                <p className={task.completed ? 'completed' : ""}>{task.task}</p>
                <div className="iconsss">
                    <FaTrash onClick={() => deleteTodo(task.id)} />
                    <FaPen onClick={() => EditTodo(task.id)} />
                    <FaCheck onClick={() => toggleComplete(task.id)} />
                </div>
            </div>
        );
    }
}
