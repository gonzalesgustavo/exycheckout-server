const checkedOut = [];
const checkedIn = [];
const shops = [];

module.exports = class Shop {
    constructor(catagory) {
        this._catagory = catagory;
    }
    save() {
        shops.push(this);
    }
    static checkOut(id) {
        checkedOut.push(id);
    }
    static checkIn(id) {
        checkedIn.push(id);
    }

    static confirm(id) {
        //update product as checked in
    }
}