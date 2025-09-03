import { Product } from "./Bai8";

export class Order {
    products: Product[] = [];
    addProduct(product: Product): void {
        this.products.push(product);
    }
    totalPrice(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
