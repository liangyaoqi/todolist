import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'


export default class Header extends Component {
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp=(event)=>{
    const {keyCode,target} = event
    if(keyCode !== 13)   return
    if(target.value.trim() === ''){
      alert('名字不能为空')
      return
    }

    const todoObj = {id:nanoid(),name:target.value,done:false}
    //传递todoObject给App
    this.props.addTodo(todoObj)

    //清空
    target.value=''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>    )
  }
}
