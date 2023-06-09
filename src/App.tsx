import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';

function App() {
  // return (
  //   <blockquote cite='Benjamin Franklin'>
  //     Tell me and I forget, teach me and I may remember, involve me and I learn.
  //   </blockquote>
  // );
  return (
    <div className='container'>
      <blockquote cite='Benjamin Franklin'>
        Tell me and I forget, teach me and I may remember, involve me and I learn.
      </blockquote>
      <ProjectsPage />
      <Hello name='David' />
    </div>
  )
}

export default App;
