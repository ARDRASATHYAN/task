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

  if (!post) return <div className="detail-container">Loading...</div>;

  return (
    <div className="detail-container">
     
      <div className="post-detail mb-3">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p><strong>Post ID:</strong> {post.id}</p>
        <p><strong>User ID:</strong> {post.userId}</p>
      </div>
      <button onClick={handleBack} className="back-button ">
        &larr; Back to List
      </button>
    </div>
  );
}

export default DetailView;
