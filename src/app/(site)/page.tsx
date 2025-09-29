import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Nextjs E-commerce template",
  description: "This is Home for NextCommerce Template",
  // other metadata
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          NextMerce eCommerce Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          🚀 Successfully deployed with Vercel + Supabase
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">✅ Next.js 15</h3>
            <p className="text-gray-600">React 19 with App Router</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">✅ Supabase</h3>
            <p className="text-gray-600">PostgreSQL with Prisma ORM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">✅ Vercel</h3>
            <p className="text-gray-600">Auto-deploy from GitHub</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          Deployment test - Database integration coming soon!
        </p>
      </div>
    </div>
  );
}
