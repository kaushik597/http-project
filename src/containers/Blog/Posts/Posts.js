import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from '../../../axios';
import { Route } from 'react-router-dom'

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost'


class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'kaushik'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        this.props.history.push('/posts/'+id)
        // this.props.history.push(id);
    }
    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />

                );       
            });
        }

        return (
            <div>
                <section className="Posts">
                {posts}
            </section>
           { console.log("1111111111111111111",this.props.match.url)}

            <Route path={this.props.match.url+ '/:id'} exact component={FullPost}/>

            </div>
            
        );
    }
}


export default Posts;