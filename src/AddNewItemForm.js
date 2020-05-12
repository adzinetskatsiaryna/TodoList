import React from 'react';

class AddNewItemForm extends React.Component {
    state={
        error: false,
        title: ''
    };
    constructor(props) {
        super(props);
    };
    onAddItemClick = () =>{
        let newTitle = this.state.title.trim();
        if(newTitle.trim ===''){
            this.setState({error:true})
        }else {
            this.props.addItem(newTitle);
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
           this.onAddItemClick();
       }
    };

    render = () => {
        let errorClass = this.state.error ? 'error' : '';
        return (
            <div className="todoList-newTaskForm">
                <input
                    className={errorClass}
                    onChange={this.onTitleChenged}
                    type="text"
                    value={this.state.title}
                    onKeyPress={this.onKeyPress}
                    placeholder="New item name"
                />
                <button onClick={this.onAddItemClick}>Add</button>
            </div>

        );
    }
}
export default AddNewItemForm;

