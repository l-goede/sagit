export type Product = {
  id: string;
  image: string;
  title: string;
  description?: string;
  price: string;
  targetPrice?: number;
};

export type ResultProduct = {
  product: Product;
  targetPrice?: number;
  onClick?: () => void;
};

export type LabeledInput = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export type PriceInputField = {
  label: string;
  value: number | '';
  placeholder: string;
  onChange: (value: number) => void;
};

export type PriceInput = {
  label: string;
  value: string;
  placeholder: string;
};

export type TargetPrice = {
  description: string;
  targetPrice: number;
};

export type WatchlistHeader = {
  headline: string;
};

export type WatchlistItem = {
  product: Product;
  targetPrice: number;
};
