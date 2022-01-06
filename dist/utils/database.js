"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWatchlistCollection = exports.getCollection = exports.disconnectDatabase = exports.connectDatabase = void 0;
const mongodb_1 = require("mongodb");
let client;
const connectDatabase = async (url) => {
    client = new mongodb_1.MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
};
exports.connectDatabase = connectDatabase;
const disconnectDatabase = async () => {
    await client.close();
};
exports.disconnectDatabase = disconnectDatabase;
const getCollection = (name) => {
    return client.db().collection(name);
};
exports.getCollection = getCollection;
const getWatchlistCollection = () => {
    return exports.getCollection('watchlistItems');
};
exports.getWatchlistCollection = getWatchlistCollection;
//# sourceMappingURL=database.js.map