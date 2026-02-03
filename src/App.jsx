import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/itemList';

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

  return (
    <div>
      <ItemForm onAddItem={handleAddOrUpdateItem} editingItem={editingItem} />
      <ItemList item={item} onDeleteItem={deleteItem} onEditItem={editItem} />
    </div>
  );
};

export default App;
