"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    totalPrice() {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
exports.Order = Order;
