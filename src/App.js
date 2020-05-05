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
            // {id: 0, title: "CSS", isDone: false, priority: "hight"},
            // {id: 1, title: "JS", isDone: false, priority: "low"},
            // {id: 2, title: "HTML", isDone: true, priority: "hight"},
            // {id: 3, title: "React", isDone: true, priority: "medium"},
            // {id: 4, title: "JQuery", isDone: false, priority: "hight"},
        ],
    filterValue: "All"
};
    nextTaskId = 0;

    saveState = ()=>{
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("state", stateAsString);
    };

    restoresState = ()=>{
        let state = {
            tasks: [],
            filterValue: 'All'
        };
        let stateAsString= localStorage.getItem("state");
        if(stateAsString){
            state = JSON.parse(stateAsString);
        }

        this.setState(state, ()=>{
            this.state.tasks.forEach(t=>{
                if(t.id>=this.nextTaskId){
                    this.nextTaskId = t.id + 1
                }
            })
        });
    };

    componentDidMount() {
        this.restoresState();
    }

    addTask = (newTitle) =>{
        // let newTitle = this.newTaskTitleRef.current.value;
        // this.newTaskTitleRef.current.value = '';
        let newTask =  {
            title: newTitle,
            isDone: false,
            priority: "hight",
            id: this.nextTaskId,
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, this.saveState);
    };
    changeFilter = (newFilterValue) =>{
        this.setState({filterValue: newFilterValue});
    };
    changeTask = (taskId, newPropValue)=>{
        let newTask = this.state.tasks.map(t=>{
            if(t.id === taskId){
                return{...t, ...newPropValue}
            }
            return t;
        });
        this.setState({tasks: newTask}, this.saveState)
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
                                   changeTitle={this.changeTitle}
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

