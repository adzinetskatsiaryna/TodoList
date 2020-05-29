import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
import TodoListTitle from "./TodoListTitle";
import {connect} from "react-redux";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    // newTaskTitleRef = React.createRef()
    state = {
        // tasks: [
        //     // {id: 0, title: "CSS", isDone: false, priority: "hight"},
        //     // {id: 1, title: "JS", isDone: false, priority: "low"},
        //     // {id: 2, title: "HTML", isDone: true, priority: "hight"},
        //     // {id: 3, title: "React", isDone: true, priority: "medium"},
        //     // {id: 4, title: "JQuery", isDone: false, priority: "hight"},
        // ],
    filterValue: "All"
};

    // saveState = ()=>{
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("state" +this.props.id, stateAsString);
    // };
    //
    // restoresState = ()=>{
    //     let state = {
    //         tasks: [],
    //         filterValue: 'All'
    //     };
    //     let stateAsString= localStorage.getItem("state" + this.props.id);
    //     if(stateAsString){
    //         state = JSON.parse(stateAsString);
    //     }
    //
    //     this.setState(state, ()=>{
    //         this.state.tasks.forEach(t=>{
    //             if(t.id>=this.nextTaskId){
    //                 this.nextTaskId = t.id + 1
    //             }
    //         })
    //     });
    // };
    //
    // componentDidMount() {
    //     this.restoresState();
    // }
    //
    // nextTaskId = 0;

    addTask = (newTitle) =>{
        // let newTitle = this.newTaskTitleRef.current.value;
        // this.newTaskTitleRef.current.value = '';

        // let newTask =  {
        //     id: this.nextTaskId,
        //     title: newTitle,
        //     isDone: false,
        //     priority: "hight",
        // };

        this.props.addTask(this.props.id, newTitle)
        // this.nextTaskId++;
        //         // let newTasks = [...this.state.tasks, newTask];
        //         // this.setState({tasks: newTasks}, this.saveState);
    };

    changeFilter = (newFilterValue) =>{
        this.setState({filterValue: newFilterValue});
    };

    changeTask = (taskId, obj)=>{
        // let newTask = this.state.tasks.map(t=>{
        //     if(t.id === taskId){
        //         return{...t, ...obj}
        //     }
        //     return t;
        // });
        this.props.changeTask(this.props.id, taskId, obj)
        // this.setState({tasks: newTask}, this.saveState)
    };

    changeStatus = (taskId, isDone)=>{
        this.changeTask(taskId, {isDone: isDone})
        // let newTask = this.state.tasks.map(t=>{
        //     if(t.id === taskId){
        //         return{...t, isDone: isDone}
        //     }
        //     return t;
        // })
        // this.setState({tasks: newTask})
    }

    changeTitle = (taskId, title)=>{
        this.changeTask(taskId, {title: title})
        // let newTask = this.state.tasks.map(t=>{
        //     if(t.id === taskId){
        //         return{...t, title: title}
        //     }
        //     return t;
        // })
        // this.setState({tasks: newTask})
    };

    deleteTask = (taskId)=>{
        // let tasks = this.state.tasks.filter((t)=>{
        //     return t.id !== taskId
        // });
        this.props.removeTask(this.props.id, taskId)
        // this.setState({tasks}, this.saveState)
    };

    render = () => {
        let filtredTasks=this.props.tasks.filter(t =>{
                switch (this.state.filterValue) {
                    case 'Active':
                        return t.isDone === false;
                    case "Completed":
                        return t.isDone === true;
                    case "All":
                        return true;
                    default:
                        return true
                }
            });

        return (
            <div className="App">
                <div className="todoList">
                    {/*<div className="todoList-header">*/}
                    {/*    <h3 className="todoList-header__title">What to Learn</h3>*/}
                    {/*    <div className="todoList-newTaskForm">*/}
                    {/*        <input*/}
                    {/*            type="text"*/}
                    {/*            placeholder="New task name"*/}
                    {/*            ref={this.newTaskTitleRef}*/}
                    {/*        />*/}
                    {/*        <button onClick={this.onAddTaskClick} >Add</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className='todolist-header'>
                        <TodoListTitle
                            id = {this.props.id}
                            title = {this.props.title}
                            deleteTodoList = {this.props.deleteTodoList}
                        />
                        <AddNewItemForm addItem={this.addTask} />
                    </div>

                    <TodoListTasks
                        id={this.props.id}
                        tasks={filtredTasks}
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        deleteTask={this.deleteTask}
                    />

                    <TodoListFooter
                        filterValue = {this.state.filterValue}
                        changeFilter = {this.changeFilter}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask(todolistId, newTitle) {
            const action = {
                type: 'ADD_TASK',
                newTitle: newTitle,
                todolistId: todolistId
            };
            dispatch(action)
        },
        changeTask(todolistId, taskId, obj) {
            const action = {
                type: 'CHANGE_TASK',
                todolistId: todolistId,
                taskId: taskId,
                obj: obj
            };
            dispatch(action)
        },
        removeTask(todolistId, taskId) {
            const action = {
                type: 'DELETE_TASK',
                todolistId: todolistId,
                taskId: taskId,
            };
            dispatch(action)
        }
    }
};

export default connect (null, mapDispatchToProps) (TodoList);

