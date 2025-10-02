import React from "react";
import MenuItemDetails from "@/components/MenuItemDetails";
import { Metadata } from "next";
import indianMenuData from "@/data/indianMenuData";

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const menuItem = indianMenuData.find(item => item.id === parseInt(resolvedParams.id));
  
  if (!menuItem) {
    return {
      title: "Menu Item Not Found | Spice Garden",
      description: "The requested menu item could not be found."
    };
  }

  return {
    title: `${menuItem.title} | Spice Garden - Authentic Indian Restaurant`,
    description: `Order ${menuItem.title} online. ${menuItem.description || 'Authentic Indian cuisine'} at Spice Garden. Ready in ${menuItem.prepTime || '8-12 minutes'}.`,
    keywords: `${menuItem.title}, Indian food, ${menuItem.category}, authentic Indian cuisine, takeaway`,
  };
}

const MenuItemPage = async ({ params }: Props) => {
  const resolvedParams = await params;
  
  return (
    <main>
      <MenuItemDetails id={resolvedParams.id} />
    </main>
  );
};

export default MenuItemPage;