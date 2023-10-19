const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8000;
const cors = require ('cors')


// Utiliza CORS en toda tu aplicación
app.use(cors());

app.use(express.json());

// Proxy para a primeira API
app.post('/api1/predict', async (req, res) => {
    try {
        const response = await axios.post('http://13.53.177.48/api/predict', req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.response?.data || {});
    }
});

// Proxy para a segunda API
app.post('/api2/predict', async (req, res) => {
    try {
        const response = await axios.post('http://16.171.23.124/api/predict', req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.response?.data || {});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
