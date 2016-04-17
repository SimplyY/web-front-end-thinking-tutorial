import React, {Component} from 'react'
import Todo from './Todo'

class Root extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Todo />
            </div>
        )
    }
}

export default Root
