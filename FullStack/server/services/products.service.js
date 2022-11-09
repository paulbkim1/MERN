const {Products} = require("../models/products.model");

const createProducts = async (data) => {
    console.log('service: createProducts');
    const products = await Products.create(data);
    return products;
}

const getAllProducts = async () => {
    console.log('service: getAllProducts');
    const products = await Products.find();
    return products;
}

const getProductsById = async (_id) => {
    console.log(_id)
    console.log('service: getProductsById');
    const product = await Products.findById(_id);
    return product;
}

const deleteProductsById = async (id) => {
    console.log('service: deleteProductsById');
    const product = await Products.findByIdAndDelete(id);
    return product;
}

const getProductsByIdAndUpdate = async (id,data) => {
    console.log('service: getProductsByIdAndUpdate');
    const product = await Products.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return product;
}

module.exports = {
    createProducts: createProducts, getAllProducts, getProductsById, deleteProductsById, getProductsByIdAndUpdate,
};