import { useState, useEffect } from 'react';
import { Package, MapPin, Settings, Users, BarChart3, Plus } from 'lucide-react';
import { menuItemsAPI, categoriesAPI, locationsAPI, customizationAPI } from '../../utils/api';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const [stats, setStats] = useState({
    totalItems: 0,
    totalCategories: 0,
    totalLocations: 0,
    totalCustomizations: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [menuItems, categories, locations, customizations] = await Promise.all([
        menuItemsAPI.getAll(),
        categoriesAPI.getAll(),
        locationsAPI.getAll(),
        customizationAPI.getAll(),
      ]);

      setStats({
        totalItems: menuItems.data.length,
        totalCategories: categories.data.length,
        totalLocations: locations.data.length,
        totalCustomizations: customizations.data.length,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const tabs = [
    { id: 'menu', name: 'Menú', icon: Package },
    { id: 'categories', name: 'Categorías', icon: BarChart3 },
    { id: 'locations', name: 'Ubicaciones', icon: MapPin },
    { id: 'customizations', name: 'Personalizaciones', icon: Settings },
  ];

  const statCards = [
    { name: 'Productos', value: stats.totalItems, icon: Package, color: 'bg-blue-500' },
    { name: 'Categorías', value: stats.totalCategories, icon: BarChart3, color: 'bg-green-500' },
    { name: 'Ubicaciones', value: stats.totalLocations, icon: MapPin, color: 'bg-purple-500' },
    { name: 'Personalizaciones', value: stats.totalCustomizations, icon: Settings, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Panel de Administración</h1>
            </div>
            <button
              onClick={onLogout}
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="card">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'menu' && <MenuManagement />}
            {activeTab === 'categories' && <CategoryManagement />}
            {activeTab === 'locations' && <LocationManagement />}
            {activeTab === 'customizations' && <CustomizationManagement />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder components for each management section
const MenuManagement = () => (
  <div className="text-center py-12">
    <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">Gestión de Menú</h3>
    <p className="text-gray-600 mb-4">Administra los productos del menú</p>
    <button className="btn-primary">
      <Plus className="w-4 h-4 mr-2" />
      Agregar Producto
    </button>
  </div>
);

const CategoryManagement = () => (
  <div className="text-center py-12">
    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">Gestión de Categorías</h3>
    <p className="text-gray-600 mb-4">Administra las categorías del menú</p>
    <button className="btn-primary">
      <Plus className="w-4 h-4 mr-2" />
      Agregar Categoría
    </button>
  </div>
);

const LocationManagement = () => (
  <div className="text-center py-12">
    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">Gestión de Ubicaciones</h3>
    <p className="text-gray-600 mb-4">Administra las sedes del restaurante</p>
    <button className="btn-primary">
      <Plus className="w-4 h-4 mr-2" />
      Agregar Ubicación
    </button>
  </div>
);

const CustomizationManagement = () => (
  <div className="text-center py-12">
    <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">Gestión de Personalizaciones</h3>
    <p className="text-gray-600 mb-4">Administra las opciones de personalización</p>
    <button className="btn-primary">
      <Plus className="w-4 h-4 mr-2" />
      Agregar Personalización
    </button>
  </div>
);

export default AdminDashboard;