import type { WatchlistItem } from '../types';
import { getWatchlistCollection } from './database';

export const readWatchlist = async (): Promise<WatchlistItem[]> => {
  return await getWatchlistCollection().find().toArray();
};

export const saveWatchlist = async (
  productId: string,
  price: string,
  targetPrice: number
): Promise<void> => {
  await getWatchlistCollection().insertOne({
    productId,
    price,
    targetPrice,
  });
};
