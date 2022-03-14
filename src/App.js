import React, {Component} from 'react'
import './style.css'


class DeleteTodoBtn extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li>
        {this.props.val}
        <button onClick = {() => this.props.deleteTodo(this.props.idx)}>Delete</button>
      </li>
    )
  }
}

class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoVal: '',
      list: [{id: Math.random(), item: 'zhenhao'}]
    }
  }

  changeTodo = (e) => {
    this.setState({
      todoVal: e.target.value
    })
  }

  showTodo = () => {
    this.setState({
      list: [...this.state.list, {id: Math.random(), item: this.state.todoVal}],
      todoVal: ''
    })
  }

  deleteTodo = (idx) => {
    this.state.list.splice(idx, 1)
    this.setState({
      list: Array.from(this.state.list)
    })
  }


  render(){
    return(
      <div>
        <h4>{this.props.header}</h4>
        <input 
          type = "text"
          value = {this.state.todoVal}
          onChange = {this.changeTodo}
        />
        <button onClick = {this.showTodo}>Add</button>
        <ul>
          {this.state.list.map((elem, i) => {
            return <DeleteTodoBtn key = {elem.id} val = {elem.item} deleteTodo = {this.deleteTodo} idx = {i}/>
          })}
        </ul>
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <Todo header = "zhang"/>
    </div>
  )
}
