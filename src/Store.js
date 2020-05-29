import {createStore} from "redux";


const initialState = {
    todolists: [
        {
            id: 1, title: 'JS', tasks: [
                {id: 0, title: 'css', isDone: true, priority: 'low'},
                {id: 1, title: 'html', isDone: false, priority:'hight'},

            ]
        },
        {id: 2, title: 'React', tasks: []},
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CREATE_TODOLIST':
            let newTodolist = {
                id: (new Date()).getTime(),
                title: action.title,
                tasks: []
            };
            return {
                ...state,
                todolists: [...state.todolists, newTodolist]
            };

        case 'ADD_TASK':
            let newTask =  {
                    id: (new Date()).getTime(),
                    title: action.newTitle,
                    isDone: false,
                    priority: "hight",
                };
            return {
                ...state,
                todolists: state.todolists.map(todo => {
                        if (todo.id !== action.todolistId) {
                            return todo
                        } else {
                            return {
                                ...todo,
                                tasks: [...todo.tasks, newTask]
                            }
                        }
                    }
                )
            };

        case 'CHANGE_TASK':
            return {
                ...state,
                todolists: state.todolists.map(todo => {
                        if (todo.id !== action.todolistId) {
                            return todo
                        } else {
                            return {
                                ...todo,
                                tasks: todo.tasks.map(task=>{
                                    if(task.id !== action.taskId){
                                        return task
                                    }else return {...task,...action.obj}

                                })
                            }
                        }
                    }
                )
            }

        case 'DELETE_TASK':
            return {
               ...state,
                todolists: state.todolists.map(todo=>{
                    if(todo.id!==action.todolistId){
                        return todo
                    }else {
                        return {
                            ...todo,
                            tasks: todo.tasks.filter(task=>task.id!=action.taskId)
                        }
                    }
                })
            }

        case 'DELETE_TODOLIST':
            return {
                ...state,
                todolists: state.todolists.filter(todo=>todo.id!==action.todolistId)
            };

        default:
            return state
    }
};


const store = createStore(reducer);

export default store;


