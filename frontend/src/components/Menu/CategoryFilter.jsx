import { getCategoryIcon } from '../../utils/format';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        <button
          onClick={() => onCategoryChange(null)}
          className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
            selectedCategory === null
              ? 'border-primary-500 bg-primary-50 text-primary-700'
              : 'border-gray-200 hover:border-gray-300 text-gray-700'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">🍽️</span>
            <span className="font-medium text-sm">Todos</span>
          </div>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedCategory === category.id
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">{getCategoryIcon(category.icon)}</span>
              <span className="font-medium text-sm">{category.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;