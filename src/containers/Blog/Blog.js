import React, { Component } from 'react';
import {Route,NavLink,Switch, Redirect} from 'react-router-dom'
import axios from '../../axios'
import Posts from '../Blog/Posts/Posts'
// import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
import  asyncComponent from '../../hoc/asyncComponent'
import './Blog.css';

const AsyncNewPost= asyncComponent(()=>{
    return import('./NewPost/NewPost')
})


class Blog extends Component {

    state={
        auth:true
    }
  
 
   
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
                    {this.state.auth?
                    <Route path='/new-post' component={AsyncNewPost} />:null}
                    <Route path='/posts'  component={Posts}/>
                    <Redirect  from="/"  to="/posts" />

                </Switch>
              
               
            </div>
        );
    }
}

export default Blog;