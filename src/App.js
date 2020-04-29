import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    newTaskTitleRef = React.createRef()
    state = {
        tasks: [
            {title: "CSS", isDone: false, priority: "hight"},
            {title: "JS", isDone: false, priority: "low"},
            {title: "HTML", isDone: true, priority: "hight"},
            {title: "React", isDone: true, priority: "medium"},
            {title: "JQuery", isDone: false, priority: "hight"},
        ],
    filterValue: "All"
};
    addTask = (newTitle) =>{
        // let newTitle = this.newTaskTitleRef.current.value;
        // this.newTaskTitleRef.current.value = '';
        let newTask =  {
            title: newTitle, isDone: false, priority: "hight"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks})
    };
    changeFilter = (newFilterValue) =>{
        this.setState({filterValue: newFilterValue});
    };
    changeStatus = (task, isDone)=>{
        let newTask = this.state.tasks.map(t=>{
            if(t === task){
                return{...t, isDone: isDone}
            }
            return t;
        })
        this.setState({tasks: newTask})
    }

    render = () => {
        let filtredTasks=this.state.tasks.filter(t =>{
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
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks tasks ={filtredTasks}
                                   changeStatus={this.changeStatus}
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

export default App;

