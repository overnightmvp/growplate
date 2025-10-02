import React, { useState } from 'react';
import { addOnItems } from '@/data/indianMenuData';

interface AddOnSelections {
  drink: string | null;
  side: string | null;
  extra: string | null;
}

interface CartAddOnsProps {
  onAddOnsChange: (selections: AddOnSelections, total: number) => void;
}

const CartAddOns: React.FC<CartAddOnsProps> = ({ onAddOnsChange }) => {
  const [selections, setSelections] = useState<AddOnSelections>({
    drink: null,
    side: null,
    extra: null
  });

  const handleSelectionChange = (category: keyof AddOnSelections, itemId: string | null) => {
    const newSelections = { ...selections, [category]: itemId };
    setSelections(newSelections);
    
    // Calculate total for selected add-ons
    let total = 0;
    
    if (newSelections.drink) {
      const drinkItem = addOnItems.drinks.find(item => item.id === newSelections.drink);
      if (drinkItem) total += drinkItem.price;
    }
    
    if (newSelections.side) {
      const sideItem = addOnItems.sides.find(item => item.id === newSelections.side);
      if (sideItem) total += sideItem.price;
    }
    
    if (newSelections.extra) {
      const extraItem = addOnItems.extras.find(item => item.id === newSelections.extra);
      if (extraItem) total += extraItem.price;
    }
    
    onAddOnsChange(newSelections, total);
  };

  const renderRadioGroup = (
    title: string, 
    icon: string, 
    items: typeof addOnItems.drinks, 
    category: keyof AddOnSelections
  ) => (
    <div className="bg-gray-1 rounded-lg p-4 mb-4">
      <h4 className="font-medium text-dark flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        {title}
      </h4>
      <div className="space-y-2">
        {/* None option */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name={category}
            value=""
            checked={selections[category] === null}
            onChange={() => handleSelectionChange(category, null)}
            className="w-4 h-4 text-blue border-gray-3 focus:ring-blue focus:ring-2"
          />
          <span className="text-dark-4 text-sm">No {title.toLowerCase()}</span>
        </label>
        
        {/* Item options */}
        {items.map((item) => (
          <label key={item.id} className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name={category}
                value={item.id}
                checked={selections[category] === item.id}
                onChange={() => handleSelectionChange(category, item.id)}
                className="w-4 h-4 text-blue border-gray-3 focus:ring-blue focus:ring-2"
              />
              <span className="text-dark text-sm group-hover:text-blue transition-colors">
                {item.name}
                {item.popular && (
                  <span className="ml-2 text-xs bg-blue text-white px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </span>
            </div>
            <span className="text-dark font-medium text-sm">
              ${item.price.toFixed(2)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="border-t border-gray-3 pt-4 mt-4">
      <h3 className="font-semibold text-dark text-lg mb-4 flex items-center gap-2">
        <span>🍽️</span>
        Add to Your Order
      </h3>
      
      <div className="space-y-4">
        {renderRadioGroup("Drinks", "🥤", addOnItems.drinks, "drink")}
        {renderRadioGroup("Sides", "🍞", addOnItems.sides, "side")}
        {renderRadioGroup("Extras", "🍯", addOnItems.extras, "extra")}
      </div>
      
      {/* Quick pickup reminder */}
      <div className="bg-blue/10 border border-blue/20 rounded-lg p-3 mt-4">
        <p className="text-blue text-sm flex items-center gap-2">
          <span>⏱️</span>
          Ready for pickup in 8-12 minutes
        </p>
      </div>
    </div>
  );
};

export default CartAddOns;