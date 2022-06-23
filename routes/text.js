const router = require("express").Router();
let Text= require("../models/text.model");




router.route("/").get((req,res)=>{
    Text.find()
    .then(texts => res.json(texts))
    .catch(err => res.status(400).json("Error : "+ err))

})


router.route("/add").post((req,res)=>{
    const username = req.body.username;
    const desc = req.body.desc;

    const newText = new Text({username:username,desc:desc});

    newText.save()
    .then(() => res.json("Text Added !"))
    .catch(err => res.status(400).json("Error : "+ err))

})


router.route('/:id').get((req, res) => {
    Text.findById(req.params.id)
      .then(text => res.json(text))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
    Text.findByIdAndDelete(req.params.id)
      .then(() => res.json('Text deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });



  router.route('/update/:id').post((req, res) => {
    Text.findById(req.params.id)
      .then(text => {
        text.username = req.body.username;
        text.desc = req.body.desc;
  
        text.save()
          .then(() => res.json('Text updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;