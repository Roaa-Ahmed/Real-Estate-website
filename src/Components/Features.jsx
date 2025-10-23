import React, { useState } from 'react';
import { FaHeart, FaBed, FaBath, FaExpand, FaComment, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';

const Features = () => {
  const [likedProperties, setLikedProperties] = useState([]);
  const [toasts, setToasts] = useState([]);

  const properties = [
    {
      id: 1,
      image: "/Featuers1.png",
      title: "Luxury Apartment in Dubai Marina",
      beds: 2,
      baths: 2,
      sqft: 1200,
      price: "$450,000",
      type: "sale",
      badge: "VR Tour",
      badgeColor: "bg-blue-500",
      href: "/product-details"
    },
    {
      id: 2,
      image: "/Featuers2.png",
      title: "Modern Villa in New Capital",
      beds: 20,
      baths: 3,
      sqft: 2500,
      price: "$2,500/mo",
      type: "rent",
      badge: "For Rent",
      badgeColor: "bg-green-500",
      href: "/product-details"
    },
    {
      id: 3,
      image: "/Featuers3.png",
      title: "Penthouse in Stockholm",
      beds: 3,
      baths: 2,
      sqft: 1800,
      price: "$750,000",
      type: "premium",
      badge: "Premium",
      badgeColor: "bg-purple-500",
      href: "/product-details"
    }
  ];

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    const toast = { id, message, type };
    
    setToasts(prev => [...prev, toast]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getButtonColor = (type) => {
    switch (type) {
      case 'sale':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'rent':
        return 'bg-green-500 hover:bg-green-600';
      case 'premium':
        return 'bg-purple-500 hover:bg-purple-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  const getPriceColor = (type) => {
    switch (type) {
      case 'sale':
        return 'text-blue-600';
      case 'rent':
        return 'text-green-600';
      case 'premium':
        return 'text-purple-600';
      default:
        return 'text-blue-600';
    }
  };

  const toggleLike = (propertyId) => {
    const property = properties.find(p => p.id === propertyId);
    const isCurrentlyLiked = likedProperties.includes(propertyId);
    
    setLikedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );

    // Show notification
    if (isCurrentlyLiked) {
      showToast(`"${property.title}" removed from wishlist`, 'info');
    } else {
      showToast(`"${property.title}" added to wishlist`, 'success');
    }
  };

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center gap-3 p-4 rounded-lg shadow-lg backdrop-blur-sm
            transform transition-all duration-300 ease-in-out
            animate-slide-in-right max-w-sm
            ${toast.type === 'success' 
              ? 'bg-green-500/90 text-white border border-green-400/50' 
              : 'bg-blue-500/90 text-white border border-blue-400/50'
            }
          `}
          style={{
            animation: 'slideInRight 0.3s ease-out'
          }}
        >
          <div className="flex-shrink-0">
            {toast.type === 'success' ? (
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <FaCheck className="text-sm" />
              </div>
            ) : (
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <FaHeart className="text-sm" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-relaxed">
              {toast.message}
            </p>
          </div>
          
          <button
            onClick={() => removeToast(toast.id)}
            className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style> */}

        <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked premium properties with VR tours available
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${property.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {property.badge}
                  </div>
                  
                  {/* Heart Icon */}
                  <div 
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
                    onClick={() => toggleLike(property.id)}
                  >
                    <FaHeart 
                      className={`transition-all duration-200 ${
                        likedProperties.includes(property.id) 
                          ? 'text-red-500 scale-110' 
                          : 'text-gray-400 hover:text-red-300'
                      }`}
                      style={{
                        filter: likedProperties.includes(property.id) 
                          ? 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))' 
                          : 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {property.title}
                  </h3>

                  {/* Property Details */}
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <FaBed className="text-sm" />
                      <span className="text-sm">{property.beds} Bed</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <FaBath className="text-sm" />
                      <span className="text-sm">{property.baths} Bath</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <FaExpand className="text-sm" />
                      <span className="text-sm">{property.sqft} sqft</span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl font-bold ${getPriceColor(property.type)}`}>
                      {property.price}
                    </div>
                    <Link to={property.href}>
                    <button 
                      className={`${getButtonColor(property.type)} text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-md`}
                    >
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Chat Button */}
          <Link to='chatbot'>
          <div className="fixed bottom-8 right-8 z-10">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
              style={{
                animation: 'bounce 2s infinite'
              }}
            >
              <FaComment className="text-xl" />
            </div>
          </div>
          </Link>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};

export default Features;