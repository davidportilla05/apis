import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { formatPhoneNumber } from '../../utils/format';

const LocationCard = ({ location }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola! Me gustaría hacer un pedido desde ${location.name}`);
    window.open(`https://wa.me/${location.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${location.phone}`, '_self');
  };

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {location.name}
          </h3>
          <p className="text-gray-600 text-sm">{location.neighborhood}</p>
        </div>
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <MapPin className="w-6 h-6 text-primary-600" />
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-start space-x-3">
          <MapPin className="w-4 h-4 text-gray-400 mt-1" />
          <p className="text-gray-700 text-sm">{location.address}</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="w-4 h-4 text-gray-400" />
          <p className="text-gray-700 text-sm">{formatPhoneNumber(location.phone)}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Zona de Domicilio</h4>
        <div className="flex flex-wrap gap-1">
          {location.deliveryZones.map((zone, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800"
            >
              {zone}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={handlePhoneClick}
          className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          <Phone className="w-4 h-4" />
          <span>Llamar</span>
        </button>
        
        <button
          onClick={handleWhatsAppClick}
          className="flex-1 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default LocationCard;