const express = require('express')
const app = express()
const port = 3000


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.render('index.jsx');
});

app.get('/services', (req, res) => {
    res.render('services.jsx');
});
app.get('/contact', (req, res) => {
    res.render('contact.jsx');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))