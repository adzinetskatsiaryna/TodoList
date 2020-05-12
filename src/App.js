import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
import TodoList from "./TodoList";

class App extends React.Component {

    state = {
        todolists: [
            // {id:1, title: 'Week tasks'},
            // {id:2, title: 'Day tasks'}
        ]
    }
//     constructor(props) {
//         super(props);
//     }
//     // newTaskTitleRef = React.createRef()
//     state = {
//         tasks: [
//             // {id: 0, title: "CSS", isDone: false, priority: "hight"},
//             // {id: 1, title: "JS", isDone: false, priority: "low"},
//             // {id: 2, title: "HTML", isDone: true, priority: "hight"},
//             // {id: 3, title: "React", isDone: true, priority: "medium"},
//             // {id: 4, title: "JQuery", isDone: false, priority: "hight"},
//         ],
//     filterValue: "All"
// };
//
//
//     saveState = ()=>{
//         let stateAsString = JSON.stringify(this.state);
//         localStorage.setItem("state", stateAsString);
//     };
//
//     restoresState = ()=>{
//         let state = {
//             tasks: [],
//             filterValue: 'All'
//         };
//         let stateAsString= localStorage.getItem("state");
//         if(stateAsString){
//             state = JSON.parse(stateAsString);
//         }
//
//         this.setState(state, ()=>{
//             this.state.tasks.forEach(t=>{
//                 if(t.id>=this.nextTaskId){
//                     this.nextTaskId = t.id + 1
//                 }
//             })
//         });
//     };
//
//     componentDidMount() {
//         this.restoresState();
//     }
//
//     nextTaskId = 0;
//
//     addTask = (newTitle) =>{
//         // let newTitle = this.newTaskTitleRef.current.value;
//         // this.newTaskTitleRef.current.value = '';
//         let newTask =  {
//             id: this.nextTaskId,
//             title: newTitle,
//             isDone: false,
//             priority: "hight",
//
//         };
//         this.nextTaskId++;
//         let newTasks = [...this.state.tasks, newTask];
//         this.setState({tasks: newTasks}, this.saveState);
//     };
//     changeFilter = (newFilterValue) =>{
//         this.setState({filterValue: newFilterValue});
//     };
//     changeTask = (taskId, newPropValue)=>{
//         let newTask = this.state.tasks.map(t=>{
//             if(t.id === taskId){
//                 return{...t, ...newPropValue}
//             }
//             return t;
//         });
//         this.setState({tasks: newTask}, this.saveState)
//     };
//
//     changeStatus = (taskId, isDone)=>{
//         this.changeTask(taskId, {isDone: isDone})
//         // let newTask = this.state.tasks.map(t=>{
//         //     if(t.id === taskId){
//         //         return{...t, isDone: isDone}
//         //     }
//         //     return t;
//         // })
//         // this.setState({tasks: newTask})
//     }
//
//     changeTitle = (taskId, title)=>{
//         this.changeTask(taskId, {title: title})
//         // let newTask = this.state.tasks.map(t=>{
//         //     if(t.id === taskId){
//         //         return{...t, title: title}
//         //     }
//         //     return t;
//         // })
//         // this.setState({tasks: newTask})
//     };
//
//     deleteTask = (taskId)=>{
//         let tasks = this.state.tasks.filter((t)=>{
//             return t.id !== taskId
//         });
//         this.setState({tasks}, this.saveState)
//     };
//
    saveState = ()=>{
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("todolists",  stateAsString);
    };

    restoresState = ()=>{
        let state = {
            todolists: [],

        };
        let stateAsString= localStorage.getItem("todolists" + this.props.id);
        if(stateAsString){
            state = JSON.parse(stateAsString);
        }

        this.setState(state, ()=>{
            this.state.todolists.forEach(t=>{
                if(t.id>=this.nextTodoId){
                    this.nextTodoId = t.id + 1
                }
            })
        });
    };

    componentDidMount() {
        this.restoresState()
    };

    nextTodoId = 0;
    addTodolist = (newTitle) =>{
        let newTodo =  {
            id: this.nextTodoId,
            title: newTitle

        };
        this.nextTodoId++;
        let newTodos = [...this.state.todolists, newTodo];
        this.setState({todolists: newTodos}, this.saveState);
    };



        render = () => {

        let todolists = this.state.todolists.map((t)=>{
            return <TodoList key = {t.id} id = {t.id} title = {t.title} />
        });
        // let filtredTasks=this.state.tasks.filter(t =>{
        //         switch (this.state.filterValue) {
        //             case 'Active':
        //                 return t.isDone === false;
        //             case "Completed":
        //                 return t.isDone === true;
        //             case "All":
        //                 return true;
        //             default:
        //                 return true
        //         }
        //     });

        return (
            <>
                <div>
                    <AddNewItemForm addItem = {this.addTodolist} />
                </div>

                {/*<div>*/}
                {/*    <input/>*/}
                {/*    <button onClick={this.addTodolist}>add</button>*/}
                {/*</div>*/}
                <div className="App">
                    {todolists}
                    {/*<TodoList id = {1} />*/}
                    {/*<TodoList id = {2} />*/}
                </div>
            </>
        );
    }
}

export default App;

