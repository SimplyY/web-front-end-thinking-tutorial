// main.jsx
import React from 'react'
import { render } from 'react-dom'
import './css/style.css'
var dataArray={}
//import Root from './Root'
import TodoApp from './component/TodoApp'

render(
    <TodoApp dataArray={dataArray}/>,
    document.getElementById('root')
)