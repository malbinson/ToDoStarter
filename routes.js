var express = require('express');
var router = express.Router();
var Note = require('./models/note')

router.get('/', (req, res) => {
  res.render('index.ejs')
});

router.get('/list', (req,res) => {
  Note.find({},(err,foundNotes) => {
    res.render("list.ejs", {notes:foundNotes})
  })
})

router.get('/add', (req,res) => {
  res.render("add.ejs")
})

router.post('/newNote', (req,res) => {
  var o = {
    name:req.body.noteName
  }
  var n = new Note(o);
  n.save((err,savedNote) => {
    console.log(savedNote)
    res.redirect("/list")
  })
})


module.exports = router