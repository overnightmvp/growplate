# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NextMerce is a Next.js eCommerce template built with React 19, TypeScript, and Tailwind CSS. This codebase includes both the free template structure and Prisma database integration for full eCommerce functionality.

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run postinstall` - Generate Prisma client (runs automatically after npm install)
- `npm run db:migrate` - Run Prisma database migrations
- `npm run db:generate` - Generate Prisma client manually
- `npm run db:seed` - Seed database with initial data

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.3 with App Router
- **UI**: React 19 with TypeScript (strict: false in tsconfig)
- **Styling**: Tailwind CSS with extensive custom design system
- **State Management**: Redux Toolkit with feature-based slices
- **Database**: Prisma ORM with PostgreSQL (configured for Vercel)
- **Additional**: Swiper for carousels, react-hot-toast for notifications

### Directory Structure
- `src/app/` - Next.js App Router with route groups
  - `(site)/(pages)/` - Main site pages (cart, checkout, shop, auth, etc.)
  - `blogs/` - Blog-related pages with sidebar variations
  - `context/` - React Context providers for modal state management
  - `css/` - Global styles and custom font definitions
- `src/components/` - Feature-based component organization
  - Each feature has its own directory (Auth/, Cart/, Shop/, Blog/, etc.)
  - `Common/` - Shared components (modals, ProductItem, PreLoader, etc.)
- `src/redux/` - Redux store and feature slices
  - `features/` - Individual slices (cart-slice, wishlist-slice, quickView-slice, product-details)
  - `provider.tsx` - Redux provider wrapper
  - `store.ts` - Store configuration with typed hooks
- `src/types/` - TypeScript type definitions
- `src/lib/` - Utility libraries (Prisma client)
- `prisma/` - Database schema, migrations, and seed data
- `public/images/` - Static assets organized by feature

### Database Schema (Prisma)

**Key Models:**
- `User` - User management with relations to orders, cart, wishlist, addresses
- `Product` - Products with categories, images, and inventory tracking
- `Category` - Product categorization
- `ProductImage` - Multiple images per product (thumbnail, preview, gallery)
- `CartItem` - Shopping cart items with user/product relations
- `WishlistItem` - User wishlist functionality
- `Order` - Order management with status tracking and address relations
- `OrderItem` - Individual items within orders
- `Address` - User addresses for billing and shipping

### Key Architecture Patterns

**State Management Hybrid Approach:**
- Redux Toolkit for cart/wishlist/product interactions (client-side state)
- Prisma for persistent data (users, orders, products from database)
- React Context for modal states and UI interactions
- Static data files for demo content (shopData.ts, categoryData.ts)

**Database Configuration:**
- PostgreSQL with connection pooling for Vercel deployment
- Environment variables: POSTGRES_PRISMA_URL, POSTGRES_URL_NON_POOLING
- Automatic client generation via postinstall hook

**Styling System:**
- Extensive Tailwind customization with 60+ custom spacing values
- Custom color palette with semantic naming (body, meta, dark variants)
- Euclid Circular A font family loaded via CSS
- Dark mode support with class-based strategy
- Custom box shadows and z-index scales

**Component Architecture:**
- Feature-based organization over atomic design
- Co-located data files with components
- Reusable modal system using React Context
- Redux selectors with memoization (createSelector)

### Data Flow Patterns

**Client-Side State (Redux):**
- Cart operations (add, remove, update quantities)
- Wishlist management
- Quick view modal state
- Product detail interactions

**Server-Side Data (Prisma):**
- User authentication and profiles
- Order processing and history
- Product catalog and inventory
- Address management

**Static Demo Data:**
- Product showcases (shopData.ts)
- Categories and testimonials
- Blog content for demonstration

## Development Notes

- TypeScript strict mode disabled for easier development
- Uses App Router with route groups for logical organization
- Database-first approach with Prisma schema as source of truth
- Hybrid state management: Redux for UI state, Prisma for persistent data
- Custom Tailwind configuration requires understanding of design system tokens
- Modal system relies on React Context providers in layout hierarchy