import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts : []
    }

    componentDidMount() {
        axios.get('posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Subash'
                    }
                })
                this.setState({
                    posts: updatePosts
                })
            })
            .catch(error => {
                this.setState({error: true});
            })
    }

    postSelected = (id) => {
        this.props.history.push({
            pathname: `/posts/${id}`
        });
    }

    render() {

        let posts = <p style={{textAlign: "center"}}>Something went Wrong!!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelected(post.id)} />
                    // </Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;