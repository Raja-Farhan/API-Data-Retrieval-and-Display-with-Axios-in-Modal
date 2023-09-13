import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from './DataTable/DataTable';
import PostModal from './PostModal/PostModal';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error ('Error fetching posts:',error));

      axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => setComments(response.data))
      .catch((error) => console.error ('Error fetching comments:',error));

      axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error ('Error fetching todos:',error));

      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error ('Error fetching users:',error));
  }, []);
  
  const displayDetails = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  }

  return (
    <div className="App">
      <div className='container mb-5'>
        <h1 className='mb-4'>API Data Table</h1>
        <h2>Posts</h2>
        <DataTable data={posts} displayDetails={displayDetails} />
        <h2>Comments</h2>
        <DataTable data={comments} displayDetails={displayDetails} />
        <h2>Todos</h2>
        <DataTable data={todos} displayDetails={displayDetails} />
        <h2>Users</h2>
        <DataTable data={users} displayDetails={displayDetails} />
        {selectedItem && <PostModal item={selectedItem} closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default App;
