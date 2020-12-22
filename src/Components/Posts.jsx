import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Posts = () => {

const [posts, setPosts] = useState([]);

const getPosts = async () => {
    let res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    let posts = await res.json();
    setPosts(posts);
}

useEffect(() => {
    getPosts();
}, []);

if(!posts){
    return(
    <>
    <h1>Loading...</h1>
    </>
    )
}
else{return (
    <>
    {posts.map(post => {
        return (
            <>
                <div key= {`post id ${post?.id}`} className="container bg-dark">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title">Post Title: {post?.title}</h5>
                                    <p className="card-text">Post Body: {post?.body}</p>
                                    <div className="card-text">
                                        <Link to={`/posts/${post?.id}`}>{post?.title}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })}
</>
)}
}

export default Posts;