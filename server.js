const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();


connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to DressStore app.' });
});

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
