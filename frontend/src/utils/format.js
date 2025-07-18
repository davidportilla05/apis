export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatPhoneNumber = (phone) => {
  // Format Colombian phone numbers
  if (phone.startsWith('+57')) {
    const number = phone.slice(3);
    return `+57 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  }
  return phone;
};

export const getCategoryIcon = (iconName) => {
  const icons = {
    'beef': '🍔',
    'hot-dog': '🌭',
    'french-fries': '🍟',
    'acompañamientos': '🥗',
    'cup-soda': '🥤',
  };
  return icons[iconName] || '🍽️';
};