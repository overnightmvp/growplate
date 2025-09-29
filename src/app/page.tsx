// This file acts as the root page for the App Router
// The actual content is handled by the (site) route group
// This ensures proper Next.js 15 App Router structure

import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Nextjs E-commerce template",
  description: "This is Home for NextCommerce Template",
};

export default function RootPage() {
  return <Home />;
}