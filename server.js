const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs')
app.use(express.stactic(`${__dirname}/public`));

app.get('/about', (req, res) =>{
    res.render(home.hbs, {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my sidde',
        currentYear: ?,        
    });
});

hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear()
})
//app.listen(3000);