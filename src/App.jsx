import { useState } from 'react';
import ItemForm from './components/ItemForm';

const App = () => {
  const [item, setItem] = useState([]);

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
  return (
    <div>
      <ItemForm onAddItem={addItem} />
    </div>
  );
};

export default App;
