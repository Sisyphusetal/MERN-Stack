const UserController = require('../controllers/user.controller')

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/user/:id', UserController.findOneSingleUser);
    app.patch('/api/user/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}