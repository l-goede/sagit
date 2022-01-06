"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./server/routes"));
const database_1 = require("./utils/database");
const { PORT = 3331 } = process.env;
const app = express_1.default();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
// Serve storybook production bundle
app.use('/storybook', express_1.default.static('dist/storybook'));
// Serve app production bundle
app.use(express_1.default.static('dist/app'));
// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'app/index.html'));
});
if (process.env.MONGODB_URL === undefined) {
    throw new Error('Missing env MONGODB_URL');
}
database_1.connectDatabase(process.env.MONGODB_URL).then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Sagit listening at http://localhost:${PORT}`);
    });
});
//# sourceMappingURL=server.js.map