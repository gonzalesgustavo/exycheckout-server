const setup = (req, res, next) => {
    res.status(200).end('build')
};

const checkout = (req, res, next) => {
    res.status(200).end('checkout')
};

const checkin = (req, res, next) => {
    res.status(200).end('checkin')
};

const confirm = (req, res, next) => {
    res.status(200).end('checkin')
};

module.exports = {
    setup,
    checkout,
    checkin,
    confirm
}