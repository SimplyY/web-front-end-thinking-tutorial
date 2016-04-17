import React, {Component} from 'react'
var classNames = require('classnames');

class TodoList extends Component {
    constructor(props) {
        super(props),
        this.state = {
            editedIndex: -1,
            isActive: false
        }
    }

    render() {
        const { editedIndex } = this.state;

        let itemClasses = this.props.items.map((item, index) => {
            let itemClass = classNames({
                'itemText': true,
                'active': index === parseInt(editedIndex, 10)
            });
            return itemClass;
        })

        return (
            <ul>
                {this.props.items.map((item, i) => {
                    return (
                        //给子级设置唯一的标识key
                        <li className="item" key={i} data-index={i} onDoubleClick={this.doubleClick.bind(this)}>

                            <label>{item}</label>
                            <button className="delete" onClick={this.deleteItem.bind(this, i)}></button>

                            <input className={itemClasses[i]} value={item}
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
        this.setState({
            editedIndex: e.target.dataset.index,
            isActive: true
        });
    }

    itemTextChange(e){
        var newText = e.target.value.trim();
        var index = this.state.editedIndex;
        this.props.items[index] = newText;
        this.props.changeItems(this.props.items);
    }

    keyDownChange(e){
        if(e.keyCode === 13){
            this.setState({
                editedIndex: -1,
                isActive: false
            });
        }
    }
}

export default TodoList
