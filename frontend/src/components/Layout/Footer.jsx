import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Parrilleros</h3>
                <p className="text-sm text-gray-400">Burger & Grill</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Las mejores hamburguesas artesanales de la ciudad. 
              Carne a la parrilla, ingredientes frescos y sabores únicos.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestras Sedes</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary-500" />
                <div>
                  <p className="font-medium">Tamasagra</p>
                  <p className="text-sm text-gray-400">Manzana 9A casa 1</p>
                  <p className="text-sm text-gray-400">Tel: 301 222 2098</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary-500" />
                <div>
                  <p className="font-medium">San Ignacio</p>
                  <p className="text-sm text-gray-400">Cra 32 # 14 - 84</p>
                  <p className="text-sm text-gray-400">Tel: 316 606 0005</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary-500" />
                <div>
                  <p className="font-medium">Las Cuadras</p>
                  <p className="text-sm text-gray-400">Calle 20 # 31C - 38</p>
                  <p className="text-sm text-gray-400">Tel: 313 341 9733</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="text-sm">Domicilios a toda la ciudad</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-500" />
                <span className="text-sm">Lun - Dom: 11:00 AM - 10:00 PM</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Síguenos</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Parrilleros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;