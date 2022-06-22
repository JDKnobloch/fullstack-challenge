import Product from "./Product";

export default interface Order {
    purchasedAt: string;
    currency: string;
    totalPrice: number;
    products: Product[];
    orderId: number;
    createdAt: string;
    updatedAt: string;
}