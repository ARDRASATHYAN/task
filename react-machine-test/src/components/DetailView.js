import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailView.css';

function DetailView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error('Error fetching post details:', error));
  }, [id]);

  const handleBack = () => {
    navigate('/list');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  if (!post) return <div className="detail-container">Loading...</div>;

  return (
    <div className="detail-container">
      <header>
        <h1>Post Details</h1>
      </header>
      <div className="post-detail">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p><strong>Post ID:</strong> {post.id}</p>
        <p><strong>User ID:</strong> {post.userId}</p>
      </div>
      <div className="button-group">
        <button onClick={handleBack} className="logout-button" style={{background:"#4CAF50"}}>
      back
        </button>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default DetailView;
