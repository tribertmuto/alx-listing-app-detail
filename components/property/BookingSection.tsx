import React, { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [nights, setNights] = useState(0);

  const calculateNights = (checkInDate: string, checkOutDate: string) => {
    if (checkInDate && checkOutDate) {
      const startDate = new Date(checkInDate);
      const endDate = new Date(checkOutDate);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return daysDiff > 0 ? daysDiff : 0;
    }
    return 0;
  };

  const handleCheckInChange = (date: string) => {
    setCheckIn(date);
    setNights(calculateNights(date, checkOut));
  };

  const handleCheckOutChange = (date: string) => {
    setCheckOut(date);
    setNights(calculateNights(checkIn, date));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-6">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      
      <div className="mt-4 border rounded-lg">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r">
            <label className="block text-xs font-medium text-gray-700 mb-1">CHECK-IN</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => handleCheckInChange(e.target.value)}
              className="w-full text-sm outline-none" 
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">CHECKOUT</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => handleCheckOutChange(e.target.value)}
              className="w-full text-sm outline-none" 
            />
          </div>
        </div>
        <div className="p-3 border-t">
          <label className="block text-xs font-medium text-gray-700 mb-1">GUESTS</label>
          <select className="w-full text-sm outline-none">
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
          </select>
        </div>
      </div>

      {nights > 0 && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>${price} x {nights} nights</span>
            <span>${price * nights}</span>
          </div>
          <div className="flex justify-between">
            <span>Cleaning fee</span>
            <span>$50</span>
          </div>
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>$25</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${price * nights + 75}</span>
          </div>
        </div>
      )}

      <button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
        Reserve
      </button>
      
      <p className="text-center text-sm text-gray-600 mt-2">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingSection;