import React, { Component } from 'react';
import axios from '../../axios'

import './Blog.css';

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
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                
            </div>
        );
    }
}

export default Blog;