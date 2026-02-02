const ItemList = ({ item }) => {
  if (!item || item.length === 0)
    return (
      <p className='text-gray-400 text-center mt-6'>
        No items yet! Please add some items
      </p>
    );

  return (
    <section className='max-w-4xl mx-auto px-4 py-6 space-y-4'>
      {item.map((myItem) => (
        <div
          key={myItem.id}
          className='bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md hover:shadow-lg transition-shadow'
        >
          {/* Left section: text and badges */}
          <div className='flex-1 space-y-2'>
            <h3 className='text-white text-lg font-semibold'>{myItem.title}</h3>
            <p className='text-gray-400 text-sm'>{myItem.description}</p>
            <div className='flex flex-wrap gap-2 mt-2'>
              <span className='text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400'>
                Priority: {myItem.priority}
              </span>
              <span className='text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400'>
                Category: {myItem.category}
              </span>
              <span className='text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400'>
                Time: {myItem.time}
              </span>
            </div>
          </div>

          {/* Right section: status + future actions */}
          <div className='flex flex-col sm:items-end gap-2'>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                myItem.status === 'pending...'
                  ? 'bg-orange-500/20 text-orange-400'
                  : 'bg-green-500/20 text-green-400'
              }`}
            >
              Status: {myItem.status}
            </span>

            {/* Placeholder for future buttons */}
            <div className='flex gap-2'>
              {/* Example delete button */}
              <button className='text-red-500 hover:text-red-400 text-sm'>
                Delete
              </button>
              <button className='text-blue-500 hover:text-blue-400 text-sm'>
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemList;
