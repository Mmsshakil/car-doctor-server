const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


// middleware
app.use(express());
app.use(express.json());

app.get('/', (res, req) => {
    res.send('doctor is running');
})

app.listen(port, () => {
    console.log(`Doctor server is running on port ${port}`);
})