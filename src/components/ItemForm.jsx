import { useState, useEffect } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import appLogo from '../assets/icon.png';

const ItemForm = ({ onAddItem, editingItem, onSearch }) => {
  const [formItem, setFormItem] = useState({
    title: '',
    priority: 'High',
    category: 'Personal',
    description: '',
    time: 'Morning',
  });

  // Sync form when editingItem changes
  useEffect(() => {
    if (editingItem) {
      setFormItem({
        title: editingItem.title,
        priority: editingItem.priority,
        category: editingItem.category,
        description: editingItem.description,
        time: editingItem.time,
      });
    } else {
      setFormItem({
        title: '',
        priority: 'High',
        category: 'Personal',
        description: '',
        time: 'Morning',
      });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setFormItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formItem.title || !formItem.description) return;

    onAddItem(formItem);

    // Reset happens only if not editing
    if (!editingItem) {
      setFormItem({
        title: '',
        priority: 'High',
        category: 'Personal',
        description: '',
        time: 'Morning',
      });
    }
  };

  return (
    <>
      <img src={appLogo} alt='appLogo' className='logo' />
      <h1>NextGen Shopper</h1>
      <p>Organize. Prioritize. Conquer</p>

      <div className='search-filter-wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search items' onChange={onSearch} />
          <FiSearch size={20} color='#555' />
        </div>

        <div className='filter'>
          <p>Filter</p>
          <FiFilter size={24} color='#555' />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Enter an item'
          value={formItem.title}
          onChange={handleChange}
          className={`form-input ${
            editingItem
              ? 'border-blue-400 ring-1 ring-blue-400'
              : 'border-neutral-700'
          }`}
        />

        <div className='priority'>
          <label htmlFor='priority'>Priority</label>
          <select
            name='priority'
            id='priority'
            value={formItem.priority}
            required
            onChange={handleChange}
          >
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
          </select>
        </div>

        <div className='category'>
          <label htmlFor='category'>Category</label>
          <select
            name='category'
            id='category'
            value={formItem.category}
            required
            onChange={handleChange}
          >
            <option value='Personal'>Personal</option>
            <option value='Husband'>Husband</option>
            <option value='Parent'>Parent</option>
            <option value='Child'>Child</option>
            <option value='Food'>Food</option>
            <option value='House'>House</option>
          </select>
        </div>

        <div className='text-area'>
          <textarea
            name='description'
            placeholder='Add item description'
            value={formItem.description}
            onChange={handleChange}
            required
            className={`form-textarea ${
              editingItem
                ? 'border-blue-400 ring-1 ring-blue-400'
                : 'border-neutral-700'
            }`}
          />
        </div>

        <div className='time'>
          <label htmlFor='time'>Select time</label>
          <select
            name='time'
            id='time'
            value={formItem.time}
            onChange={handleChange}
          >
            <option value='Morning'>Morning</option>
            <option value='Afternoon'>Afternoon</option>
            <option value='Evening'>Evening</option>
          </select>
        </div>

        <button type='submit' className='submit-btn'>
          {editingItem ? 'Save Changes' : 'Add item'}
        </button>
      </form>
    </>
  );
};

export default ItemForm;
