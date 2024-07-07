import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductsFromDB = async() =>{
    const result = await ProductModel.find();
    return result;
}


const getSingleProductFromDB = async (id: string) =>{
    const result = await ProductModel.findOne({id});
    return result;
}

export const  ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,    
}