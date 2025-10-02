"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import indianMenuData from "@/data/indianMenuData";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

interface MenuItemDetailsProps {
  id: string;
}

const MenuItemDetails = ({ id }: MenuItemDetailsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  
  const menuItem = indianMenuData.find(item => item.id === parseInt(id));

  if (!menuItem) {
    return (
      <div className="pt-35 pb-25">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-dark mb-4">Menu Item Not Found</h1>
            <p className="text-gray-600 mb-6">The requested menu item could not be found.</p>
            <Link href="/" className="inline-flex font-medium text-white bg-blue py-3 px-6 rounded-md hover:bg-blue-dark">
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getSpiceIndicator = (spiceLevel: string) => {
    switch(spiceLevel) {
      case 'Hot': return { emoji: '🌶️🌶️🌶️', text: 'Hot & Spicy', color: 'text-red-500' };
      case 'Medium': return { emoji: '🌶️🌶️', text: 'Medium Spice', color: 'text-orange-500' };
      case 'Mild': return { emoji: '🌶️', text: 'Mild', color: 'text-yellow-500' };
      default: return { emoji: '⚪', text: 'No Spice', color: 'text-gray-400' };
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...menuItem,
        quantity: quantity,
      })
    );
  };

  const handleAddToWishlist = () => {
    dispatch(
      addItemToWishlist({
        ...menuItem,
        status: "available",
        quantity: 1,
      })
    );
  };

  const spiceInfo = getSpiceIndicator((menuItem as any).spiceLevel || '');

  return (
    <>
      <Breadcrumb 
        title={menuItem.title}
        pages={[{ title: "Menu", href: "/" }]}
      />
      
      <section className="overflow-hidden pt-25 pb-25">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12.5">
            {/* Image Section */}
            <div>
              <div className="bg-gradient-to-b from-orange-50 to-white rounded-lg p-12 text-center">
                <div className="w-full max-w-md mx-auto">
                  <div className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center text-8xl mx-auto mb-6">
                    🍛
                  </div>
                  <div className="text-center">
                    <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                      {(menuItem as any).category || 'Indian Cuisine'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="mb-6">
                <h1 className="font-semibold text-2xl lg:text-3xl text-dark mb-3">
                  {menuItem.title}
                </h1>
                
                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {(menuItem as any).description || 'Authentic Indian cuisine prepared with traditional spices and fresh ingredients.'}
                </p>

                {/* Reviews and Prep Time */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-600">4.5 ({menuItem.reviews} reviews)</span>
                  </div>
                  {(menuItem as any).prepTime && (
                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span className="text-sm text-gray-600">{(menuItem as any).prepTime}</span>
                    </div>
                  )}
                </div>

                {/* Spice Level */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-medium text-gray-700">Spice Level:</span>
                  <div className="flex items-center gap-2">
                    <span>{spiceInfo.emoji}</span>
                    <span className={`text-sm font-medium ${spiceInfo.color}`}>
                      {spiceInfo.text}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold text-orange-600">
                    ${menuItem.discountedPrice}
                  </span>
                  {menuItem.price !== menuItem.discountedPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ${menuItem.price}
                    </span>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-md border border-gray-3 flex items-center justify-center hover:bg-gray-1"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-md border border-gray-3 flex items-center justify-center hover:bg-gray-1"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Add to Order - ${(menuItem.discountedPrice * quantity).toFixed(2)}
                  </button>
                  <button
                    onClick={handleAddToWishlist}
                    className="w-12 h-12 border border-gray-3 rounded-md flex items-center justify-center hover:bg-gray-1"
                  >
                    ❤️
                  </button>
                </div>

                {/* Food Court Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">📍 Pickup Information</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>🕐 Ready in {(menuItem as any).prepTime || '8-12 minutes'}</li>
                    <li>📍 Stall 23, Southern Cross Food Court</li>
                    <li>💳 Cash, Card & PayWave accepted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="mt-15">
            <div className="border-b border-gray-3 mb-6">
              <nav className="flex gap-8">
                <button className="pb-3 border-b-2 border-orange-500 text-orange-600 font-medium">
                  Details
                </button>
              </nav>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-dark mb-3">Ingredients & Allergens</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Made with authentic Indian spices, fresh ingredients, and traditional cooking methods. 
                  Our kitchen handles nuts, dairy, gluten, and other common allergens.
                </p>
                <p className="text-xs text-gray-500">
                  Please inform staff of any dietary requirements or allergies.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-dark mb-3">Nutritional Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Serving Size:</span>
                    <span className="font-medium ml-2">1 portion</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Dietary:</span>
                    <span className="font-medium ml-2">
                      {(menuItem as any).category === 'curries' && menuItem.title.toLowerCase().includes('chicken') ? 'Contains Meat' : 
                       (menuItem as any).category === 'curries' && menuItem.title.toLowerCase().includes('paneer') ? 'Vegetarian' : 
                       'Traditional Recipe'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuItemDetails;