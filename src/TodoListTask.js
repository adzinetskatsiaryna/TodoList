import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import PropTypes from 'prop-types'


class TodoListTask extends React.Component {
    onIsDoneChanged = (event)=>{
        this.props.changeStatus(this.props.task, event.currentTarget.checked)
    };
    render = () => {
        let taskIsDoneClass = this.props.task.isDone ? 'todoList-task done' : 'todoList-task'
        return (
            <div className={taskIsDoneClass}>
                <input

                    type="checkbox"
                    checked= {this.props.task.isDone}
                    onChange={this.onIsDoneChanged}
                />
                <span>{this.props.task.title}, priority:{this.props.task.priority}</span>
            </div>
        );
    }
}

TodoListTask.propTypes = {
    task: PropTypes.object,
    changeStatus: PropTypes.func
};

export default TodoListTask;

