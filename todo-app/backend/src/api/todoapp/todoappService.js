const Todoapp = require('./todoapp')

Todoapp.methods(['get', 'post', 'put', 'delete'])
Todoapp.updateOptions({new: true, runValidators: true})

module.exports = Todoapp
