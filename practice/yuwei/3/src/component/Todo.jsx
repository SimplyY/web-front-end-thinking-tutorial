import React, {Component} from 'react'
import TodoList from './TodoList'

class Todo extends Component {
    constructor() {
        super(),
        this.state = {
            inputText: '',
            items: []
        }
    }
    render() {
        return (
            <div>
                <h1>TODO</h1>
                <input value={this.state.inputText}
                    onChange={this.onChange.bind(this)}
                    onKeyDown={this.addItem.bind(this)}/>

                <TodoList items={this.state.items} changeItems={this.changeItems.bind(this)}/>
            </div>
        )
    }

    onChange(e){
        this.setState({inputText: e.target.value.trim()});
    }

    addItem(e){
        if(e.keyCode === 13){
            var newItems = this.state.items.concat([this.state.inputText]);
            this.setState({items: newItems, inputText: ''});
        }
    }

    //子组件调用回调函数改变父组件的items
    changeItems(items){
        this.setState({items: items})
    }
}

export default Todo
