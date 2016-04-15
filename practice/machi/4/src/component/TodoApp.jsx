//TodoApp.jsx
import React, {Component} from 'react'

class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            inputStr: '',
            //������״̬�Ա㶯̬��ȡinput���ֵ
          todoList:[]//����һ���¼����飬�洢֮ǰ���¼��ַ���
        //    start:false
        }

    }

    render() {
     //   var { dataArray } = this.props
    //    const tips = getTips(dataArray, this.state.inputStr)
     //   var tips = this.props.dataArray
        console.log(this.state)


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
                               {this.state.todoList.map(item => {
                                   console.log({item})
                                   console.log("sdsd")
                                    return (
                                        <li list-id= {item}>
                                            <div>
                                                <label>{item}</label>
                                                <button className="destroy" onclick={destroy.bind(this,{item})}>destroy</button>
                                            </div>
                                            <input value={item} className="edit"/>
                                        </li>//����tipsȻ�󷵻������
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
    const index= this.state.todoList.findIndex(item)
    this.setState({todoList:this.state.todoList.prototype.slice.call(index,1)})
}

export default TodoApp