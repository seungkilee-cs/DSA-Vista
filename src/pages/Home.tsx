import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Data Structures and Algorithms Visualizer</h1>
      <div className="content">
        <div className="column">
          <h2>Data Structures</h2>
          <div className="card">
            <ul>
              <li><Link to="/data-structure/linkedList">Linked List</Link></li>
            </ul>
          </div>
        </div>
        <div className="column">
          <h2>Algorithms</h2>
          <div className="card">
            <ul>
              <li><Link to="/algorithm/binarySearch">Binary Search</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
