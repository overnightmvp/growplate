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
      title: "Menu Item Not Found | Bombay Delights",
      description: "The requested menu item could not be found."
    };
  }

  return {
    title: `${menuItem.title} | Bombay Delights - Indian Food Court Melbourne`,
    description: `Order ${menuItem.title} online. ${(menuItem as any).description || 'Authentic Indian cuisine'} at Stall 23, Southern Cross Food Court. Ready in ${(menuItem as any).prepTime || '8-12 minutes'}.`,
    keywords: `${menuItem.title}, Indian food, ${(menuItem as any).category}, Melbourne food court, takeaway`,
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