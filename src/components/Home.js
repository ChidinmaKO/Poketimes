import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pokeball from '../pokeball.png';

class Home extends Component {

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={ post.id }>
                        <img src={ Pokeball } alt="A pokeball."/>
                        <div className="card-content">
                            <Link to={ '/' + post.id }>
                                <h3 className="card-title deep-orange-text">{ post.title }</h3>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='center'>
                <h5 className='deep-orange-text'>No Posts Yet!</h5>
            </div>
        )
        return(
            <div className="container home">
                <h3 className='center'>Home</h3>
                <p>If you want to conquer fear, don't sit home and think about it. Go out and get busy. - <em>Dale Carnegie</em></p>
                { postList }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Home);