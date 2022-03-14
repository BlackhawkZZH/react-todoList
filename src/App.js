import React, {Component} from 'react'
import './style.css'
class Item extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li>
        {this.props.val}
        <button onClick = {() => this.props.deleteLi(this.props.idx)}>Delete</button>
      </li>
    )
  }
}

class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoVal: '',
      list: [{id: Math.random(), item: 'demoLi'}]
    }
  }

  getVal = (e) => {
    this.setState({
      todoVal: e.target.value
    })
  }

  setLi = () => {
    this.setState({
      list: [...this.state.list, {id: Math.random(), item: this.state.todoVal}],
      todoVal: ''
    })
  }

  deleteLi = (idx) => {
    this.state.list.splice(idx, 1)
    this.setState({
      list: Array.from(this.state.list)
    })
  }

  render(){
    return (
      <div>
        <h4>{this.props.header}</h4>
        <input 
        type = "text"
        value = {this.state.todoVal}
        onChange = {this.getVal}
        />
        <button onClick = {this.setLi}>Add</button>
        <ul>
          <caption>{this.props.liName}</caption>
          {this.state.list.map((elem, i) => {
            return <Item key = {elem.id} val = {elem.item} idx = {i} deleteLi = {this.deleteLi}/>
          })}
        </ul>
      </div>
    )
  }
}

export default function App(){
  return(
    <div>
      <Todo header = 'demo' liName = 'showPlace' />
    </div>
  )
}