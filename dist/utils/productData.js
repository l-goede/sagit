"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveWatchlist = exports.readWatchlist = void 0;
const database_1 = require("./database");
const readWatchlist = async () => {
    return await database_1.getWatchlistCollection().find().toArray();
};
exports.readWatchlist = readWatchlist;
const saveWatchlist = async (product, targetPrice) => {
    await database_1.getWatchlistCollection().insertOne({
        product,
        targetPrice,
    });
};
exports.saveWatchlist = saveWatchlist;
//# sourceMappingURL=productData.js.map