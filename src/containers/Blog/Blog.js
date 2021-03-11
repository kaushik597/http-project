import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import axios from '../../axios'
import Posts from '../Blog/Posts/Posts'
import './Blog.css';


class Blog extends Component {

  
 
   
    render () {
       
   
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
               <Route path='/' exact render={()=> <Posts />}/>
               
            </div>
        );
    }
}

export default Blog;