import React, { Component } from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'


export class Todo extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  componentWillMount(){
    fetch('http://192.168.1.151:3000/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res =>res.json())
    .then(todos =>{
      this.setState({ todos })
    })
  }

  handleChange(text) {
    this.setState({newTodo: text})

  }

  handlePress(){
    // const todos = [...this.state.todos, this.state.newTodo]

    fetch('http://192.168.1.151/todos', {
      method: 'POST',
      body: JSON.stringify ({
        name: this.state.newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(err=> console.warn(err))
    .then(res=>res.json())
    .then(todo => {
      const todos = [todo, ...this.state.todos]
      this.setState({
        todos,
        newTodo: ''
      })
    })

  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChange.bind(this)}
            value={this.state.newTodo}
          />
          <TouchableOpacity
          style={styles.button}
          onPress={this.handlePress.bind(this)}><Text> Add Todo</Text>
          </TouchableOpacity>
        </View>
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
