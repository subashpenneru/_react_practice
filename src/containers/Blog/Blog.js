import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts : [],
        selectedPostId: null,
        error: false
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
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: "center"}}>Something went Wrong!!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    title={post.title} 
                    author={post.author} 
                    key={post.id}
                    clicked={() => this.postSelected(post.id)} />
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