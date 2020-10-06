import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class Blog extends Component {  

    render () {
        return (
            <div className="Blog">   
               <header>
                   <nav>
                       <ul>
                           {/* <li><a href="/">Home</a></li> */}
                           <li><NavLink to="/posts" 
                           exact
                           activeClassName="my-active"
                           activeStyle={{
                               color: '#fa923f',
                               textDecoration: 'underline'
                           }}
                           >Posts</NavLink></li>
                           <li><NavLink to={{
                               pathname: '/new-post',
                               hash: '#submit', 
                               search: '?quick-submit: true'
                           }}>New post</NavLink></li>
                       </ul>
                   </nav>
               </header>
                {/* <Route path="/" exact render={ () => <h1>Home</h1> }/> */}
                <Switch>
                    <Route path="/posts" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                    {/*<Redirect from="/" to="/posts"/>   */}
                    <Route render={() => <h1>Not found</h1>} />         
                </Switch>   
            </div>
        );
    }
}

export default Blog;