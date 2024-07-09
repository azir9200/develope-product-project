import { Model } from "mongoose";

// export type TVariants = {
//     type: string;
//     value: string;
// }

// export type TInventory = {
//     quantity : number;
//     inStock : boolean;
// }

// export type TProduct = {
//     id: string,
//     password: string,
//     name : string;
//     description : string;
//     price :number;
//     category : string;
//     tags : string[];
//     variants: [TVariants ];
//     inventory: [TInventory];
//     viewCount: number;
//     isDeleted?: boolean;
// }


// Variants Interface
export type TVariant = {
    type: string;
    value: string;
  }
  
  // Inventory Interface
  export type TInventory = {
    quantity: number;
    inStock: boolean;
  }
  
  // Product Interface
  export type TProduct = {
    id: string,
    password: string,
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariant[];
    inventory: TInventory;
    viewCount: number;
    isDeleted?: boolean;
  }

// static method
export interface TYPProductModel extends Model<TProduct>{
    isUserExists(id:string): Promise<TProduct | 'NO product found !'>;
}

// export type TProductMethods = {
//     createSlug(payload: TProduct): string;
//   };
