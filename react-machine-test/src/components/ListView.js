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
        <h1>View the List</h1>
      </header>
      <table className="post-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`/detail/${post.id}`} className="post-link">
                  {post.title}
                </Link>
              </td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ListView;
