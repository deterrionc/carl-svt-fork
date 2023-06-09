import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';

const App = () => {
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
