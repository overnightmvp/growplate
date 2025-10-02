export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
  // Indian restaurant specific fields
  category?: string;
  spiceLevel?: string;
  description?: string;
  prepTime?: string;
};
