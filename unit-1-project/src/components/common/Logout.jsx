import React from 'react';
import { Link } from 'react-router';

function Logout() {
  return (
    <div>
      <h1>Logged Out</h1>
      <Link to="/Login">Log Back In</Link>
    </div>
  );
}
export default Logout;