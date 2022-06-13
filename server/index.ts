const express = require('express')
const port = process.env.PORT || 5000
require('dotenv').config()

const app = express();

app.listen(port, console.log(`Server listening on port ${port}`))