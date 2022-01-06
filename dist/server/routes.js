"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = __importDefault(require("cheerio"));
const productData_1 = require("../utils/productData");
const router = express_1.default.Router();
router.get('/products', async (_request, response) => {
    const products = await productData_1.readWatchlist();
    response.json(products);
});
router.post('/products', async (request, response) => {
    const { targetPrice, ...product } = request.body;
    await productData_1.saveWatchlist(product, targetPrice);
    response.send('Product saved in db');
});
router.get('/search', async (req, res) => {
    if (typeof req.query.product !== 'string') {
        res.status(400).send('Query is malformed');
        return;
    }
    const product = await searchProducts(req.query.product);
    res.status(200).send(product);
});
exports.default = router;
async function searchProducts(name) {
    const response = await node_fetch_1.default(`https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${name}`, {
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'accept-language': 'en-US',
        },
    });
    const rawHTML = await response.text();
    const $ = cheerio_1.default.load(rawHTML);
    const offerListItems = $('.offerList-item');
    const products = [];
    offerListItems.each((_, offerListItem) => {
        const image = $(offerListItem).find('.offerList-item-image').attr('src');
        const title = $(offerListItem)
            .find('.offerList-item-description-title')
            .text()
            .trim();
        const description = $(offerListItem)
            .find('.description-part-one')
            .text()
            .trim();
        const price = $(offerListItem)
            .find('.offerList-item-priceMin')
            .text()
            .replace('\n', '')
            .trim();
        products.push({
            id: title,
            image: image || '',
            title: title,
            description: description,
            price: price,
        });
    });
    return products;
}
//# sourceMappingURL=routes.js.map