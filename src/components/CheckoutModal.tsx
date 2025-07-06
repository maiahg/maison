import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    address: '',
    city: '',
    province: '',
    zipCode: '',
    country: '',
    
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      clearCart();
      setStep(4);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              required
            />
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Shipping Address</h3>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                name="province"
                placeholder="Province"
                value={formData.province}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Payment Information</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number (1234 5678 9012 3456)"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                className="p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                required
              />
            </div>
            <input
              type="text"
              name="cardName"
              placeholder="Name on Card"
              value={formData.cardName}
              onChange={handleInputChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              required
            />
            
            <div className="mt-6 p-4 bg-stone-50 rounded-lg">
              <h4 className="font-semibold text-stone-900 mb-3">Order Summary</h4>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2 text-sm">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-stone-300 pt-2 mt-2 font-semibold">
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-semibold text-stone-900 mb-2">Order Confirmed!</h3>
            <p className="text-stone-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed and you will receive a confirmation email shortly.
            </p>
            <button
              onClick={onClose}
              className="bg-stone-900 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors duration-200 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="text-2xl font-semibold text-stone-900">
            {step === 4 ? 'Order Complete' : `Checkout - Step ${step} of 3`}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 cursor-pointer" />
          </button>
        </div>
        
        {step < 4 && (
          <div className="px-6 py-2">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-500'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-12 h-0.5 mx-2 ${
                      step > stepNumber ? 'bg-stone-900' : 'bg-stone-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="p-6">
          {renderStepContent()}
          
          {step < 4 && (
            <div className="flex justify-between pt-6 mt-6 border-t border-stone-200">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors duration-200 cursor-pointer"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={`px-8 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors duration-200 cursor-pointer ${
                  step === 1 ? 'ml-auto' : ''
                }`}
              >
                {step === 3 ? 'Complete Order' : 'Next'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;