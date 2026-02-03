import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const ItemList = ({ item, onDeleteItem, onEditItem, onToggleStatus }) => {
  if (!item || item.length === 0)
    return (
      <p className='text-gray-400 text-center mt-6'>
        No items yet! Please add some items
      </p>
    );

  return (
    <section className='max-w-4xl mx-auto px-4 py-6 space-y-3'>
      {item.map((myItem) => (
        <div
          key={myItem.id}
          className='bg-neutral-900 border border-neutral-800 rounded-lg p-4'
        >
          {/* Header: title + edit icon */}
          <div className='flex items-start justify-between gap-3'>
            <h3
              className={`text-white font-medium text-base break-words ${
                myItem.status === 'completed'
                  ? 'line-through text-green-300'
                  : ''
              }`}
            >
              {myItem.title}
            </h3>

            <button
              className='text-gray-400 hover:text-blue-400 transition'
              onClick={() => onEditItem(myItem)}
            >
              <FiEdit2 size={24} />
            </button>
          </div>

          {/* Description */}
          <p className='text-gray-400 text-sm mt-1 break-words text-left'>
            {myItem.description}
          </p>

          {/* Meta info (minimal & muted) */}
          <div className='flex flex-wrap gap-2 mt-3 text-xs text-gray-400'>
            <span className='px-2 py-0.5 border border-neutral-700 rounded'>
              {myItem.priority}
            </span>
            <span className='px-2 py-0.5 border border-neutral-700 rounded'>
              {myItem.category}
            </span>
            <span className='px-2 py-0.5 border border-neutral-700 rounded'>
              {myItem.time}
            </span>
            <span
              className={`px-2 py-0.5 border rounded ${
                myItem.status === 'pending...'
                  ? 'border-orange-700 text-orange-400'
                  : 'border-green-700 text-green-400'
              }`}
            >
              {myItem.status}
            </span>
          </div>

          {/* Footer: delete icon */}
          <div className='flex items-center justify-between mt-4'>
            {/* Left: Mark as completed */}
            <label className='flex items-center gap-2 text-gray-400 text-sm cursor-pointer'>
              <input
                type='checkbox'
                checked={myItem.status === 'completed'}
                onChange={() => onToggleStatus(myItem.id)}
                className='w-5 h-5 accent-green-400 cursor-pointer'
              />
              Mark as completed
            </label>

            {/* Right: Delete icon */}
            <button
              className='flex items-center gap-1 text-xs text-gray-500 hover:text-red-400 transition'
              onClick={() => onDeleteItem(myItem.id)}
            >
              <FiTrash2 size={20} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemList;
