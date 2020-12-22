import React from 'react'
import {useState, useEffect} from 'react'

const PostsDetails = (props) => {

const [post, setPost] = useState([]);

const getPost = async () => {
    let res = await fetch ('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id);
    let post = await res.json();
    setPost(post);
}

useEffect(() => {
    getPost();
}, []);

if(!post){
    return(
    <>
    <h1>Loading...</h1>
    </>
    )
} else{
    return(
        <>
                <div key= {`post id ${post?.id}`} className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title">Post Title: {post?.title}</h5>
                                    <p className="card-text">Post Body: {post?.body}</p>
                                    <div className="card-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )}
}

export default PostsDetails;