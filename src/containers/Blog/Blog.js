import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom'
import axios from '../../axios'
import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css';


class Blog extends Component {

  
 
   
    render () {
       
   
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/'
                            exact
                            activeClassName={'my-active'}
                            activeStyle={{color:'red',
                            textDecoration:'underline'}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-search=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               <Route path='/' exact component={Posts}/>
               <Route path='/new-post' component={NewPost} />
               
            </div>
        );
    }
}

export default Blog;