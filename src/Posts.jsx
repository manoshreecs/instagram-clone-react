import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <div className="d-flex align-items-center my-3">
                <img
                  className="dp rounded-circle"
                  src={post.userAvatar}
                  alt="profile pic"
                />
                <h5>{post.username}</h5>
              </div>

              <img className="image" src={post.postImage} alt="post" />

              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>

              <div>
                <b>{post.likes} Likes</b>
              </div>

              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading posts...</div>
      )}
    </div>
  );
}

export default Posts;


