const functions = require('./functions.js')
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine','hbs');
app.use('/assets', express.static(path.join(__dirname,'./assets')));
app.use('/js', express.static(path.join(__dirname,'./js')));

app.get("/", function (req, res) {
    res.render('index', {
        pageTitle: 'Zajęcia 27.02',// dopisek w HTML w podwórjnym {{pageTitle}}
        subTitle: 'NodeJS',
        subsubTitle: functions.someText,
        subsubsubTitle: functions.someFunction(),
    })
})
app.get("/aboutMe", function (req, res) {
    res.render('about', {
        mainName: 'Ada'
    })
})
app.get("/about", function (req, res) {
    res.send('Strona o mnie')
})

app.listen(port, (err) => {
    if (err) {
        return console.log(`Wystąpił błąd : ${err}`);
    }
console.log(`Serwer działa na porcie ${port}`);
});