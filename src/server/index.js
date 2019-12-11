const express = require('express');

const app = express();
app.use('/api', require('./routes/index'));

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
