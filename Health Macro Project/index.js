const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (request, response) => {
    readFile('./index.html', 'utf8', (err, html) => {
        if (err) {
            return response.status(500).send("There is something wrong :(");
        }
        // Send the HTML response inside the callback
        response.send(html);
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('App available on http://localhost:3000');
});
