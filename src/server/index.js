const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('src/client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname,
                '..',
                'src',
                'client',
                'build',
                'index.html'
            )
        );
    });
}

app.get('/api', (req, res) => {
    console.log('get request to "/" handled.');
    return res.status(200).send('get request to "/" handled.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    return err
        ? console.log(err)
        : console.log(`Server listening on port ${PORT}`);
});
