import { formatPrice } from '../../utils/format';

const MenuItem = ({ item }) => {
  const hasImage = item.image && item.image !== 'null';
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {hasImage && (
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          <img
            src={`http://localhost:3000${item.image}`}
            alt={item.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {item.name}
          </h3>
          <div className="text-right ml-4">
            <p className="text-xl font-bold text-primary-600">
              {formatPrice(item.price)}
            </p>
            {item.priceWithFries && (
              <p className="text-sm text-gray-500">
                Con papas: {formatPrice(item.priceWithFries)}
              </p>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.customizable && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Personalizable
            </span>
          )}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {item.availableAt?.length || 0} sedes
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Disponible en: {item.availableAt?.length || 0} ubicaciones
          </div>
          <button className="btn-primary text-sm">
            Ordenar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;