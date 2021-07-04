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

export type NavBarLinkProps = {
  icon: JSX.Element;
  link: string;
};

export type LabeledInputProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export type PriceInputFieldProps = {
  label: string;
  value: number | '';
  placeholder: string;
  onChange: (value: number) => void;
};

export type PriceInputProps = {
  label: string;
  value: string;
  placeholder: string;
};

export type TargetPriceProps = {
  description: string;
  targetPrice: string;
};

export type WatchlistHeaderProps = {
  headline: string;
};

export type WatchlistItem = {
  product: Product;
  targetPrice: number;
};
