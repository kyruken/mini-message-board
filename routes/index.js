var express = require('express');
var router = express.Router();

const messages = [
  {
    title: "My League Of Legends Addiction",
    text: `Hey I'm embarassed to say this, but I'm actually bronze in League of Legends. 
    I been playing for almost 10 years but I can't get out. I play for around 12 hours a day, and I barely sleep or eat.
    I'm TERRIBLY addicted but still bad. Anyone else addicted to video games?`,
    user: "Amando",
    added: "45 minutes ago"
  },
  {
    title: "Cast ninjutsu on enemies",
    text: `Konichiwa guys!!! Watashi have many tomodachis, pero I have some enemies. I am daijoubun but I can't help
    but to want to teach them what TRUE pain is. I'd like to SHINRA TENSEI their butts off the planet! Anyone else feel this way?`,
    user: "Charles",
    added: "1 hour ago"
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express yourself', messages: messages});
});

router.get('/new', function(req, res) {
  res.render('form')
})

router.post('/new', function(req, res) {
  let title = req.body.title;
  let author = req.body.author;
  let textMessage = req.body.message;

  messages.unshift({title: title, text: textMessage, user: author, added: new Date()});

  res.redirect('/');

})

module.exports = router;
