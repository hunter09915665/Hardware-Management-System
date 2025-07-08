// src/Components/Categories.jsx
import React, { useState } from 'react';
import './Categories.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className="category-container">
      <h2>Category Management</h2>

      <div className="category-form">
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>

      <ul className="category-list">
        {categories.map((cat, index) => (
          <li key={index}>
            {cat}
            <button className="delete-btn" onClick={() => handleDeleteCategory(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
