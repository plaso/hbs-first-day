const express = require('express');
const app = express();
const hbs = require('hbs')

const films = require('./films');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/films', (req, res, next) => {
  const data = {
    films: films.map(film => {
      return {
        ...film,
        outstanding: film.score > 9,
        isClassic: film.year < 2000,
      }
    })
  }

  res.render('films', data)
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})