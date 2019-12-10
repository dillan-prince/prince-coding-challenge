const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    console.log('get request to "/api" handled.');
    return res.status(200).send({ message: 'get request to "/api" handled.' });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('src/client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    return err
        ? console.log(err)
        : console.log(`Server listening on port ${PORT}`);
});
