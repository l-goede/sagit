import type { WishlistItem } from '../types';
import { getProductDataCollection } from './database';

export const readProductData = async (): Promise<WishlistItem[]> => {
  return await getProductDataCollection().find().toArray();
};

export const saveProductData = async (
  productId: string,
  price: string,
  targetPrice: number
): Promise<void> => {
  await getProductDataCollection().insertOne({
    productId,
    price,
    targetPrice,
  });
};
