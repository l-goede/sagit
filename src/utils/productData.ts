import type { Product, WatchlistItem } from '../types';
import { getWatchlistCollection } from './database';

export const readWatchlist = async (): Promise<WatchlistItem[]> => {
  return await getWatchlistCollection().find().toArray();
};

export const saveWatchlist = async (
  product: Product,
  targetPrice: number
): Promise<void> => {
  await getWatchlistCollection().insertOne({
    product,
    targetPrice,
  });
};
