const express = require('express');
const routes = require('./config/routes');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());


routes(app);

app.listen(port, () => {
    console.log(`Nodemon listening on port: ${port}`);
});