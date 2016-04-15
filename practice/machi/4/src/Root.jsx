import React, {Component} from 'react'
//import AutoComplete from './component/AutoComplete'
import TodoApp from './component/TodoApp'
const dataArray = ['a', 'ab', 'abc', 'data', 'dataArray']

class Root extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <TodoApp dataArray={dataArray}/>
            </div>
        )
    }
}


export default Root
