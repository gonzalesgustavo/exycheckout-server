
const login = (req, res, next) => {
    res.status(200).end('login')
};

const register = (req, res, next) => {
    res.status(200).end('register')
};

const setup = (req, res, next) => {
    res.status(200).end('build')
};

const checkout = (req, res, next) => {
    res.status(200).end('checkout')
};

const checkin = (req, res, next) => {
    res.status(200).end('checkin')
};


module.exports = {
    login,
    register,
    setup,
    checkout,
    checkin
}