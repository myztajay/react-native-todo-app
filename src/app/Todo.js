import React, { Component } from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Todoform } from './Todoform'


export class Todo extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  // componentWillMount(){
  //   fetch('http://192.168.1.151:3000/todos', {
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(res =>res.json())
  //   .then(todos =>{
  //     this.setState({ todos })
  //   })
  // }

  handleChange(text) {
    this.setState({newTodo: text})
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({todos, newTodo: ''});
      // const newtodo = {
      //   name: this.state.newTodo
      // };
      //
      // fetch('http://192.168.1.151:3000/todos', {
      //   method: 'post',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //
      //   body: JSON.stringify(newtodo)
      // })
      //
      // .then(data => data.json())
      // .then(json => {
      //   console.warn(json)
      //   const todos = [...this.state.todos, newtodo];
      //   this.setState({todos, newTodo: ''})
      // });
    }

  render(){
    return(
      <View style={styles.container}>
      <Todoform
        handlePress={this.handlePress.bind(this)}
        handleChange={this.handleChange.bind(this)}
        value={this.state.newTodo}
      />
        <View>
        {this.state.todos.map((todo, i)=> (<Text key={ i }>{ todo.name }</Text>))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
