import Link from 'next/link';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <Link 
            key={index} 
            href={`/property/${encodeURIComponent(property.name)}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={property.image} 
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
              <p className="text-gray-600 mb-2">{property.address.city}, {property.address.country}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500">★ {property.rating}</span>
                <span className="font-bold">${property.price}/night</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}