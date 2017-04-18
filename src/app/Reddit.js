import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// export class Reddit extends Component {
//   constructor(){
//     super();
//     this.state = {
//       posts: []
//     }
//   }
  // componentDidMount(){
  //   fetch('https://www.reddit.com/.json', {
  //     Accept: 'application/json'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({ posts:data.data.children })
  //   })
  // }
  // render(){
  //   return(
      // <View>
      //   <Text>Reddit</Text>
      //   {this.state.posts.map(post=>(<Text>{post.data.author}</Text>))}
      // </View>
      export const Reddit = (props) => (
      <View>
        {this.props.posts.map(posts=>(<Text>{posts.name}</Text>))}
      </View>
    )
//   }
// }
