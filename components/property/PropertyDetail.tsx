import React, { useState } from 'react';
import { PropertyProps } from '@/interfaces/index';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('description');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'amenities', label: 'What we offer' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'host', label: 'About host' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
          </div>
        );
      case 'amenities':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.category.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-6 h-6 bg-gray-200 rounded flex-shrink-0"></div>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'reviews':
        return <ReviewSection reviews={property.reviews || []} />;
      case 'host':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">About the host</h3>
            <p className="text-gray-700">
              This property is managed by a verified host with excellent ratings and quick response times.
              The host is committed to providing an exceptional experience for all guests.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{property.name}</h1>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            {renderStars(property.rating)}
            <span className="ml-1 font-medium">{property.rating}</span>
          </div>
          <span className="text-gray-600">·</span>
          <span className="text-gray-600 underline cursor-pointer">
            {property.reviews?.length || 0} reviews
          </span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-600">
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
        <div className="md:col-span-2 md:row-span-2">
          <img 
            src={property.image} 
            alt={property.name} 
            className="w-full h-64 md:h-full object-cover hover:brightness-90 transition-all cursor-pointer" 
          />
        </div>
        <div className="hidden md:block">
          <img 
            src={property.image} 
            alt={`${property.name} - view 2`} 
            className="w-full h-32 object-cover hover:brightness-90 transition-all cursor-pointer" 
          />
        </div>
        <div className="hidden md:block">
          <img 
            src={property.image} 
            alt={`${property.name} - view 3`} 
            className="w-full h-32 object-cover hover:brightness-90 transition-all cursor-pointer" 
          />
        </div>
        <div className="hidden md:block">
          <img 
            src={property.image} 
            alt={`${property.name} - view 4`} 
            className="w-full h-32 object-cover hover:brightness-90 transition-all cursor-pointer" 
          />
        </div>
        <div className="hidden md:block">
          <img 
            src={property.image} 
            alt={`${property.name} - view 5`} 
            className="w-full h-32 object-cover hover:brightness-90 transition-all cursor-pointer" 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {renderTabContent()}
          </div>
        </div>

        {/* Right Sidebar - Booking Section */}
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;