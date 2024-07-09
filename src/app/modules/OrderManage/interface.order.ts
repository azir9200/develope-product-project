import { Types } from "mongoose";

export interface TOrderData {
    id: string;
    user: Types.ObjectId;
    // productIdData: Types.ObjectId;
    email: string;
    productId: string;
    price: number;
    quantity: number;
}