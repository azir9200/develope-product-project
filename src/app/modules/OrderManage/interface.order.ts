 import {  Types } from 'mongoose';

    export type TOrderData = {
        email: string;
         productId: Types.ObjectId;
        price: number;
        quantity: number;
}