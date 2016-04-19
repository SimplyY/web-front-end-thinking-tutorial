//TodoApp.jsx
import React, {Component} from 'react'
var classNames = require('classnames');
class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            inputStr: '',
            //输入的字符串
            todoList:[],//存储todo列表
        //    start:false 更好
            inputAddStr:'',
            index:-1
         //   itemClass:[]
        }

    }

    render() {
     //   var { dataArray } = this.props
    //    const tips = getTips(dataArray, this.state.inputStr)
     //   var tips = this.props.dataArray
        console.log(this.state)
        let i =0
        let num=0
        let itemClasses = this.state.todoList.map((item,i) => {

            let itemClass = classNames({
                'itemText': true,
                'active': i === this.state.index
            });
            i=i+1;
            return itemClass;
        })
        i=0
        return (
            <section>
                    <div>
                        <h1>TODO</h1>
                        <header className="header">
                            <input placeholder="what needs tobe done?" className="new-todo"
                                   onChange={changeHandle.bind(this)} onKeyDown={enterKey.bind(this)}
                                   />
                        </header>
                        <section>
                            <ul className="todo">
                               {this.state.todoList.map((item,i) => {
                                   console.log({item})
                                   console.log("sdsd")
                                  // let i=this.state.index
                                  // this.setState({index:i+1})

                                    return (
                                        <li list-id= {item}onDoubleClick={getIndex.bind(this,item)}>
                                            <div>
                                            <label>{item}</label>
                                            <button className="destroy" onClick={destroy.bind(this,item)}>destroy</button>

                                            <input  className={itemClasses[i++]} onChange={changeHandle.bind(this)}
                                                    onKeyDown={ChangeAdd.bind(this)}  ></input>
                                            </div>
                                        </li>//返回一个新tip
                                    )
                                })}
                            </ul>
                        </section>
                    </div>
            </section>
        )
    }

}

function changeHandle(event) {
    this.setState({inputStr: event.target.value.trim()})

}

function enterKey(event,dataArray)
{
    if(event.which==13){
        this.setState({todoList:[...this.state.todoList,this.state.inputStr]})
        console.log(this.state.todoList.type)
}
}

function destroy(item)
{
    console.log(item)
    console.log(this)
   // const index= item.indexOf(this.state.todoList)
    this.setState({todoList:this.state.todoList.filter(function (candidate) {
        return candidate !== item})})
  //  console.log(index)
}

function ChangeAdd(event){
    if(event.which==13) {
        let i = this.state.todoList.length-1

        if(this.state.index === i){

            this.setState({
                todoList: [...this.state.todoList.slice(0, this.state.index),
                    this.state.inputStr]
                ,index:-1 })
        }else{
            i = this.state.index + 1
            this.setState({
                todoList: [...this.state.todoList.slice(0, this.state.index),
                    this.state.inputStr, this.state.todoList.slice(i)]
                ,index:-1 })
        }
    }

}

function getIndex(item){
    let indexx = this.state.todoList.find(item)
    this.setState({index:indexx})
    console.log(this.state.index)

}

function ShowInput(event){
    let inputNode = event.target.getElementsByTagName('input');
    let newClassName =classNames('itemText',' active');
    inputNode.className = newClassName;
}
Array.prototype.find=function(item){
    let k=-1
   for(let i=0,n=this.length;i<n;i++){
       if(this[i]===item) {
           k = i
       }
   }
    if(k !=-1){
        return k
    }else{
        return -1
    }
}
export default TodoApp