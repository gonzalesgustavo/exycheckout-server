const users = []

module.exports = class Users {
    constructor(pwd, usrName, email, position) {
        this._password = pwd;
        this._username = usrName;
        this._email = email;
        this._possition = position;
    }
    save() {
        users.push(this);
    }
    static login(username, pwd) {
        const userExists = users.find(usr => {
            return usr._username === username && usr._password === pwd;
        });
        if (userExists) {
            return "token here";
        } else {
            return null;
        }
    }
}