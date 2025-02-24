const express = require('express');
const app = express();

app.get('/plivo-answer', (req, res) => {
    res.set('Content-Type', 'text/xml');
    res.send(`
        <Response>
            <Speak>Welcome to Plivo</Speak>
        </Response>
    `);
});

app.listen(3000, () => console.log('Server running on port 3000'));
