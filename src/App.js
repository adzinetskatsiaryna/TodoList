import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
   tasks = [
        {title: "CSS", isDone: false, priority: "hight"},
        {title: "JS", isDone: false, priority: "low"},
        {title: "HTML", isDone: true, priority: "hight"},
        {title: "React", isDone: true, priority: "medium"},
        {title: "JQuery", isDone: false, priority: "hight"}
    ];
   filterValue = "Completed";
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks ={this.tasks}/>
                    <TodoListFooter filterValue = {this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

