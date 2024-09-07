import express from 'express';
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));