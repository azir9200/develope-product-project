import { Document } from 'mongoose';

export interface Variant {
    type: string;
    value: string;
}

export interface Inventory {
    quantity: number;
    inStock: boolean;
}

export interface IProduct extends Document {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
}
