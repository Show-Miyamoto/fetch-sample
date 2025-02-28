const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node run!');
});

const optArr = [
    {path: '/net', root: __dirname + '/net'},
    {path: '/web-worker', root: __dirname + '/../web-worker'}
];

optArr.forEach(x => {
    console.log(x.path, x.root);
    app.use(x.path, express.static(x.root));
});

app.listen(3000);