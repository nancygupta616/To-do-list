const Item = require('../models/listitem');
// Exports Command to make it available in other modules also
module.exports.homeController = function (req, res) {
  Item.find({}, function (err, toDoList) {

    if (err) { console.log('error in printing list'); return; }

    return res.render('home', {
      list: toDoList,
    });
  }
  )
}
// Exporting create List Command
module.exports.createList = function (req, res) {
  Item.create({
    description: req.body.description,
    category: req.body.category,
    date: req.body.date
  }, function (err, newConatact) {

    if (err) {
      console.log('error in creating');
      return;
    }

    return res.redirect('back');
  }
  )
}
// DeleteList Exporting 
module.exports.DeleteList = function (req, res) {
  for(let i in req.body){
    
     Item.findByIdAndDelete(req.body[i], function (err) {
      if (err) {
        console.log('error in deleting'); return;
      }

    })
  }
  return res.redirect('back');
}