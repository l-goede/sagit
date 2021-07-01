export type Product = {
  id: string;
  image: string;
  title: string;
  description?: string;
  price: string;
  targetPrice?: number;
};

export type PriceInput = {
  label: string;
  value: string;
  placeholder: string;
};

export type WishlistItem = {
  productId: string;
  price: string;
  targetPrice: number;
};
