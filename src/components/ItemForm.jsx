import { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import appLogo from '../assets/icon.jpg';
const ItemForm = ({ onAddItem }) => {
  const [formItem, setFormItem] = useState({
    title: '',
    priority: 'High',
    category: 'personal',
    description: '',
  });

  //   Function to handle item form change

  const handleChange = (e) => {
    setFormItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formItem.title || !formItem.description) return;
    alert('form submitted');

    //sending data upwards
    onAddItem(formItem);

    //resetting item form
    setFormItem({
      title: '',
      priority: 'High',
      category: 'personal',
      description: '',
    });
  };

  return (
    <>
      <img src={appLogo} alt='appLogo' className='logo' />
      <h1>Shopping List App</h1>
      <p>Manage shopping in a modern way</p>

      <div className='search'>
        <input type='text' placeholder='Search items' />
        <FiSearch size={20} color='#555' />
      </div>

      <div className='filter'>
        <p>filter</p>
        <FiFilter size={24} color='#555' />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Enter an item'
          value={formItem.title}
          onChange={handleChange}
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
            <option value='HusbandFood'>Husband</option>
            <option value='Parent'>Parent</option>
            <option value='Child'>Child</option>
            <option value='Food'>Food</option>
            <option value='HouseParent'>House</option>
          </select>
        </div>

        <div className='text-area'>
          <textarea
            name='description'
            id='description'
            placeholder='Add item description'
            value={formItem.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type='submit'>Add item</button>
      </form>
    </>
  );
};

export default ItemForm;
