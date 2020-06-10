import React, { Component } from 'react'
import './App.scss'
import Layout from './components/shared/Layout'
import { getAllPosts } from './services/posts'
export default class App extends Component {

 state = {
  posts: null
 }

 componentDidMount() {
  this.getPostList()
 }

 getPostList = async () => {
  const posts = await getAllPosts()
  this.setState({ posts })
 }



 render() {
  return (
   <>
    <Layout
     posts={this.state.posts}
    />
   </>
  )
 }
}
