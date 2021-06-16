import { MongoClient } from 'mongodb';

let client: MongoClient;

export const connectDatabase = async (url: string): Promise<void> => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
};

export const disconnectDatabase = async (): Promise<void> => {
  await client.close();
};
