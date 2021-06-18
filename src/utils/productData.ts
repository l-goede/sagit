import type { Product } from '../types';
import { getProductDataCollection } from './database';

export const readProductData = async (): Promise<Product[]> => {
  return await getProductDataCollection().find().toArray();
};

export const saveProductData = async (product: Product): Promise<void> => {
  await getProductDataCollection().insertOne({
    ...product,
  });
};
