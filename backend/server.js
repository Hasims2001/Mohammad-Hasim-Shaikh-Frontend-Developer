const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(cors())
app.get('/', (req, res) => {
    try {
        const fileContent = fs.readFileSync("./data.json", 'utf-8');
        const data = JSON.parse(fileContent);
        res.send({"data": data, 'issue': false})
    } catch (error) {
        res.send({'error': error.message, 'issue': true})
    }
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})