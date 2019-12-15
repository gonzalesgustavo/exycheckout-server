const User = require('../models/users.model');

const login = (req, res, next) => {
    const { username, password } = req.body;
    const token = User.login(username, password)
    res.status(200).json({ results: token })
};

const register = (req, res, next) => {
    const { username, email, password } = req.body;
    const usr = new User(username, email, password);
    usr.save();
    res.status(200).json({ results: usr })
};

const promotion = (req, res, next) => {
    const id = req.params.id;
    const { position } = req.body;
    const updatedUsr = User.promote(id, position);
    res.status(200).json({ results: updatedUsr })
};

const delUser = (req, res, next) => {
    User.delete(req.params.id)
    res.status(204).end()
};

const updateUsr = (req, res, next) => {
    const usr = User.update(req.params.id, req.body);
    res.status(200).json({ results: usr })
};

module.exports = {
    login,
    register,
    promotion,
    delUser,
    updateUsr
}