import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ListView.css';

function ListView() {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => setPosts(response.data))
        .catch((error) => console.error('Error fetching posts:', error));
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      navigate('/')
    };
  

  return (
    <div className="list-container">
      <header>
        <h1>Posts</h1>
       
      </header>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/detail/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ListView;
