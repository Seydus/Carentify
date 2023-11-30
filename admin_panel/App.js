// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import CarList from './components/CarManagement/CarList';
import ReservationList from './components/ReservationManagement/ReservationList';
import UserList from './components/UserManagement/UserList';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-container">
          <Sidebar />
          <Switch>
            <Route path="/car-management" component={CarList} />
            <Route path="/reservation-management" component={ReservationList} />
            <Route path="/user-management" component={UserList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
