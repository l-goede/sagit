import type { Credential } from '../types';
import { getCredentialsCollection } from './database';

export const readCredentials = async (): Promise<Credential[]> => {
  return await getCredentialsCollection().find().sort({ service: 1 }).toArray();
};
