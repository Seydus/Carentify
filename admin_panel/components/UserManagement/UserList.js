/*
// UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your API
    // Example: fetch('/api/users').then(response => response.json()).then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            User ID: {user.id}, Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
*/ 

// UserList.js
import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your API
    // Example: fetch('/api/users').then(response => response.json()).then(data => setUsers(data));

    // For demonstration purposes, using a sample array of users
    const sampleUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
      // ... other user objects
    ];
    setUsers(sampleUsers);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserDetails user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
