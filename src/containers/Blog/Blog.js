import React, { Component } from 'react';
import {Route,NavLink,Switch, Redirect} from 'react-router-dom'
import axios from '../../axios'
import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
import './Blog.css';


class Blog extends Component {

  
 
   
    render () {
       
   
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts'
                            exact
                            activeClassName={'my-active'}
                            activeStyle={{color:'red',
                            textDecoration:'underline'}}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-search=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts'  component={Posts}/>
                    <Redirect  from="/"  to="/posts" />

                </Switch>
              
               
            </div>
        );
    }
}

export default Blog;