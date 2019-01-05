import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        posts: [ ]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState( {
                    posts: res.data.slice(0, 10)
                } )
            })
    }


    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={ post.id }>
                        <div className="card-content">
                            <Link to={ '/' + post.id }>
                                <h3 className="card-title">{ post.title }</h3>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='center'>
                <h4>No Posts Yet!</h4>
            </div>
        )
        return(
            <div className="container">
                <h3 className='center'>Home</h3>
                <p>If you want to conquer fear, don't sit home and think about it. Go out and get busy. - <em>Dale Carnegie</em></p>
                { postList }
            </div>
        )
    }
}


export default Home;