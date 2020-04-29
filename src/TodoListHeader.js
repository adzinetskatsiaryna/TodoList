import React from 'react';

class TodoListHeader extends React.Component {
    state={
        error: false,
        title: ''
    };
    constructor(props) {
        super(props);
        // this.newTaskTitleRef = React.createRef()
    };
    onAddTaskClick = () =>{
        let newTitle = this.state.title.trim();

        if(newTitle.trim ===''){
            this.setState({error:true})
        }else {
            this.props.addTask(newTitle);
           // this.newTaskTitleRef.current.value = '';
            this.setState({title: ""});
            this.props.addTask(newTitle);
            this.setState({
                error:false,
                title: ''
            });
        }
    };
    onTitleChenged = (e)=>{
        this.setState(
            {error:false,
             title: e.currentTarget.value
            })
    };
    onKeyPress = (e)=>{
       if(e.key === 'Enter'){
           this.onAddTaskClick();
       }
    };

    render = () => {
        let errorClass = this.state.error ? 'error' : '';
        return (
            <div className="todoList-header">
                 <h3 className="todoList-header__title">What to Learn</h3>
                 <div className="todoList-newTaskForm">
                    <input
                        className={errorClass}
                        onChange={this.onTitleChenged}
                        type="text"
                        value={this.state.title}
                        onKeyPress={this.onKeyPress}
                        placeholder="New task name"
                        //ref={this.newTaskTitleRef}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}
export default TodoListHeader;

