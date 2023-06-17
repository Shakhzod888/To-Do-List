import React from "react";

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        //inputning holatini statega ozgartiradi
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.value);
        //addTodo nomli prop orqali value ni o'z ichiga olgan todo qo'shadi. So'ng value ni qayta bo'sh satrga sozlaydi.
        this.setState({ value: "" });
    };

    render() {
        return (
            <form className="TodoForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="todo-input"
                    value={this.state.value}
                    placeholder="What is the task today?"
                    onChange={this.handleChange}
                />
                <button type="submit" className="todo-btn">
                    Add Task
                </button>
            </form>
        );
    }
}
