const main = async () => {
    const express = require('express');
    const app = express();
    app.get('/', (_, res) => {
        res.send('Home page');
    });
    app.get('/about', (_, res) => {
        res.send('About Page');
    });
    app.listen(3000, () => {
        console.log('Server started on Port:3000');
    });
};
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map