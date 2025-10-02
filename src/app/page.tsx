// This file acts as the root page for the App Router
// The actual content is handled by the (site) route group
// This ensures proper Next.js 15 App Router structure

import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bombay Delights | Authentic Indian Food Court - Southern Cross Melbourne",
  description: "Order fresh Indian takeaway online. Curry, biryani, naan & more. Located at Stall 23, Southern Cross Food Court. Ready in 8-12 minutes. Lunch specials available.",
  keywords: "Indian food, curry, biryani, naan, Melbourne food court, takeaway, Southern Cross Station, authentic Indian cuisine",
};

export default function RootPage() {
  return <Home />;
}