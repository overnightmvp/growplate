# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NextMerce is a Next.js eCommerce template built with React 19, TypeScript, and Tailwind CSS. This is the free/community version that provides a static eCommerce template with Redux state management for cart, wishlist, and product interactions.

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.3 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Redux Toolkit (@reduxjs/toolkit)
- **Additional**: Swiper for carousels, react-hot-toast for notifications

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - `(site)/` - Main site group with nested page routes
  - `context/` - React context providers for modals and UI state
- `src/components/` - Feature-based component organization
  - Each major feature has its own directory (Auth, Cart, Shop, etc.)
  - `Common/` contains shared components like modals and UI elements
- `src/redux/` - Redux store configuration and feature slices
  - `features/` - Individual Redux slices for cart, wishlist, quickview, product details
  - `store.ts` - Store configuration with typed hooks
- `src/types/` - TypeScript type definitions
- `public/images/` - Static assets organized by feature (products, blog, icons, etc.)

### Key Architecture Patterns

**State Management**: 
- Redux Toolkit with feature-based slices (cart-slice.ts, wishlist-slice.ts, quickView-slice.ts, product-details.ts)
- Typed hooks exported from store.ts (useAppSelector)
- React Context for modal states (CartSidebarModalContext, QuickViewModalContext, PreviewSliderContext)

**Styling System**:
- Custom Tailwind config with extensive color palette and spacing scale
- Euclid Circular A as primary font family
- Dark mode support with 'class' strategy
- Custom component sizing and typography scales

**Component Structure**:
- Feature-based organization (Auth/, Cart/, Shop/, etc.)
- Reusable UI components in Common/
- Data files co-located with components (shopData.ts, categoryData.ts, etc.)

### Data Flow
- Product data is managed through Redux slices
- Modal states use React Context
- Static data (categories, testimonials) stored in co-located data files
- No external database integration (this is the free template version)

## Development Notes

- Uses App Router with route groups for organization
- Components follow feature-based structure rather than atomic design
- Heavy use of Tailwind's custom spacing and color system
- Redux state is primarily for user interactions (cart, wishlist) rather than data fetching
- Static product data suggests this template is designed for demonstration/starter purposes