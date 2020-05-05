import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let myFn = task =>{
            return <TodoListTask
                key={task.id}
                task={task}
                changeStatus = {this.props.changeStatus}
                changeTitle = {this.props.changeTitle}
            />
        };
        let tasksElements = this.props.tasks.map(myFn)
        return (
            <div className="todoList-tasks">
                {tasksElements}
                {/*<TodoListTask title = {this.props.tasks[0].title} isDone = {this.props.tasks[0].isDone}/>*/}
                {/*<TodoListTask title = {this.props.tasks[1].title} isDone = {this.props.tasks[1].isDone}/>*/}
                {/*<TodoListTask title = {this.props.tasks[2].title} isDone = {this.props.tasks[2].isDone}/>*/}
                {/*<TodoListTask title = {this.props.tasks[3].title} isDone = {this.props.tasks[3].isDone}/>*/}
                {/*<TodoListTask title = {this.props.tasks[4].title} isDone = {this.props.tasks[4].isDone}/>*/}
            </div>
        );
    }
}

TodoListTasks.propTypes={
    tasks: PropTypes.array
}
export default TodoListTasks;

