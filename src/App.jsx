import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/itemList';

const App = () => {
  const [item, setItem] = useState(() => {
    const storedItem = JSON.parse(localStorage.getItem('item'));
    return storedItem || [];
  });

  //local storage persistence
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(item));
  }, [item]);

  const addItem = (item) => {
    setItem((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...item,
        status: 'pending...',
      },
    ]);
  };

  const deleteItem = (id) => {
    setItem(item.filter((i) => i.id !== id));
  };

  return (
    <div>
      <ItemForm onAddItem={addItem} />
      <ItemList item={item} onDeleteItem={deleteItem} />
    </div>
  );
};

export default App;
