import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/itemList';
import BackgroundTexts from './components/BackgroundTexts';

const App = () => {
  // Items state
  const [item, setItem] = useState(() => {
    const storedItem = JSON.parse(localStorage.getItem('item'));
    return storedItem || [];
  });

  // Local storage persistence
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(item));
  }, [item]);

  // Currently editing item
  const [editingItem, setEditingItem] = useState(null);

  //Search input

  const [search, setSearch] = useState('');

  const onSearch = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };

  // Add or edit item
  const handleAddOrUpdateItem = (newItem) => {
    if (editingItem) {
      // Edit mode: replace existing item
      setItem((prev) =>
        prev.map((i) => (i.id === editingItem.id ? { ...i, ...newItem } : i)),
      );
      setEditingItem(null);
    } else {
      // Add mode: add new item
      setItem((prev) => [
        ...prev,
        { id: Date.now(), ...newItem, status: 'pending...' },
      ]);
    }
  };

  // Start editing
  const editItem = (itemToEdit) => {
    setEditingItem(itemToEdit);
  };

  // Delete item
  const deleteItem = (id) => {
    setItem(item.filter((i) => i.id !== id));
    // Clear edit mode if the deleted item was being edited
    if (editingItem && editingItem.id === id) setEditingItem(null);
  };

  // Toggle completed/pending
  const toggleStatus = (id) => {
    setItem((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              status: i.status === 'pending...' ? 'completed' : 'pending...',
            }
          : i,
      ),
    );
  };

  return (
    <div>
      <BackgroundTexts />
      <ItemForm
        onAddItem={handleAddOrUpdateItem}
        editingItem={editingItem}
        onSearch={onSearch}
      />
      <ItemList
        item={item}
        onDeleteItem={deleteItem}
        onEditItem={editItem}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
};

export default App;
