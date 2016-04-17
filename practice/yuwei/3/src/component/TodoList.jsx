import React, {Component} from 'react'
var classNames = require('classnames');

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item, i) => {
                    return (
                        //给子级设置唯一的标识key
                        <li className="item" key={i} onDoubleClick={this.doubleClick.bind(this)}>

                            <label>{item}</label>
                            <button className="delete" onClick={this.deleteItem.bind(this, i)}></button>

                            <input className="itemText" value={item}
                                onChange={this.itemTextChange.bind(this)}
                                onKeyDown={this.keyDownChange.bind(this)}
                                >
                            </input>

                        </li>
                    )
                })}
            </ul>
        )
    }

    deleteItem(index){
        var propsItems = this.props.items;
        var leftItems = propsItems.slice(0, index);
        var rightItems = propsItems.slice(index + 1);
        var deletedItems = leftItems.concat(rightItems);
        this.props.changeItems(deletedItems);
    }

    doubleClick(e){
        var inputNode = e.target.getElementsByTagName('input')[0];
        var newClassName = classNames('itemText', 'active');
        inputNode.className = newClassName;
    }

    itemTextChange(e){
        var newText = e.target.value.trim();
        console.log(newText);
        // this.props.items[index] = newText;
        this.props.changeItems(this.props.items);
    }

    keyDownChange(e){
        if(e.keyCode === 13){
            var newClassName = classNames('itemText');
            e.target.className = newClassName;
        }
    }
}

export default TodoList
