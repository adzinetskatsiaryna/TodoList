import React from 'react';

class TodoListTitle extends React.Component {

    onDeleteTodoList = () => {
        this.props.deleteTodoList(this.props.id)
    };


    render = () => {

        return (
            <h3 className="todoList-header__title">
                {this.props.title}
                <button onClick={this.onDeleteTodoList}>X</button>
            </h3>
        );
    }
}

export default TodoListTitle;

