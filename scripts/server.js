const express = require('express');
const app = express();

const domain = 'http://localhost';
const port = 3000;
const dir = `${__dirname}/../public`;
const options = {
    extensions: ['html']
};

app.use(express.static(dir, options));

app.listen(port, () => {
    console.log(`Running on ${domain}, port ${port}`);
    console.log(dir);
});