import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello fro my app!');
});

const server = app.listen(8080, () => {
    console.log(`Server is up and running on port 8080`);
});
