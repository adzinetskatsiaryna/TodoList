import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import PropTypes from 'prop-types'


class TodoListTask extends React.Component {
    state = {
       isEditMode: false
    };
    activatedEditMode = ()=>{
        this.setState({isEditMode: true})
    };
    deActivatedEditMode = ()=>{
        this.setState({isEditMode: false})
    };

    onIsDoneChanged = (event)=>{
        this.props.changeStatus(this.props.task.id, event.currentTarget.checked)
    };

    onTitleChanged = (event)=>{
        this.props.changeTitle(this.props.task.id, event.currentTarget.value)
    };

    render = () => {
        let taskIsDoneClass = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';
        return (
            <div className={taskIsDoneClass}>
                <input
                    type="checkbox"
                    checked= {this.props.task.isDone}
                    onChange={this.onIsDoneChanged}
                />
                {this.state.isEditMode
                    ? <input
                        value={this.props.task.title}
                        autoFocus={true}
                        onBlur={this.deActivatedEditMode}
                        onChange={this.onTitleChanged}
                    />
                    : <span onClick={this.activatedEditMode} >{this.props.task.id}: {this.props.task.title}</span>
                }
                <span> - priority:{this.props.task.priority}</span>
            </div>
        );
    }
}

TodoListTask.propTypes = {
    task: PropTypes.object,
    changeStatus: PropTypes.func
};

export default TodoListTask;

