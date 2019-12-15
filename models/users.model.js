const users = []
const uuid = require('uuid/v4');

module.exports = class Users {
    constructor(usrName, email, pwd) {
        this._id = uuid();
        this._password = pwd;
        this._username = usrName;
        this._email = email;
        this._possitions = [];
    }
    save() {
        users.push(this);
    }
    static login(username, pwd) {
        const userExists = users.find(usr => {
            console.log(usr);
            return usr._username === username && usr._password === pwd;
        });
        if (userExists) {
            return "token here";
        } else {
            return null;
        }
    }

    static promote(id, position) {
        const usr = users.filter(usr => {
            if (usr._id === id) {
                console.log('in');
                usr._possitions.push(position);
                return usr._id === id;
            }
        });
        return usr;
    }

    static delete(id) {
        users.forEach((usr, idx) => {
            if (usr._id === id) {
                users.pop(idx)
            }
        })
        return;
    }
    //poor implimentation will improve later just for tests
    static update(id, content) {
        const usr = users.filter(usr => {
            return usr._id === id;
        });
        if (usr) {
            this.delete(id);
            users.push(content);
        }
    }
}