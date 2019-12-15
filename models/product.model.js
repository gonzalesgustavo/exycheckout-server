const items = [];
module.exports = class Product {
    constructor(name, barcode, location, status, condition) {
        this._name = name;
        this._barcode = barcode;
        this._location = location;
        this._status = status;
        this._condition = condition;
    }

    save() {
        items.push(this);
    }

    static fetchAll() {
        return [...items];
    }

    static fetchOne(id) {
        return items.filter(itm => {
            return itm._id === id;
        })
    }

    static update(id, itemInfo) {
        const item = items.filter(itm => {
            if (itm._id === id) {
                console.log("in");
            }
            return itm;
        })
        return item;
    }

    static delete(id) {
        return items.filter(itm => {
            return itm._id !== id;
        })
    }
}