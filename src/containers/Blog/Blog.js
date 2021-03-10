import React, { Component } from 'react';
import axios from '../../axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';

class Blog extends Component {

    state={
        posts:[],
        selectedPostId:null,
        error:false
    }
    componentDidMount(){
        axios.get("posts/").then(response =>{
            const posts=response.data.slice(0,4);
            const updatedPost=posts.map(post=>{
               return {...post,
                   author:"kaushik"} 
        
            })
            this.setState({posts:updatedPost})
        })
        .catch(
            this.setState({error:true})
        )
    }

    postSelectedHander=(id)=>{
        this.setState({selectedPostId:id})

    }
    render () {
        let posts=<p style={{textAlign:'center'}}>something went wrong!!</p>
        if(this.state.error){
            posts=this.state.posts.map(post=>{
                return <Post 
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={()=>this.postSelectedHander(post.id)}
                 />
            })
    
        }
   
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;