// src/components/NavigationBar.js
import React from 'react';
import './NavigationBar.css';
const NavigationBar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <nav className='menu'>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;

