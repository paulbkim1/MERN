const {createProducts,  getAllProducts, getProductsById, deleteProductsById, getProductsByIdAndUpdate} = require('../services/products.service');

const handleCreateProducts = async (req, res) => {
    console.log('controller: handleCreateProducts req.body: ', req.body);
    try {
        const products = await createProducts(req.body);
        return res.json(products)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllProducts = async (req, res) => {
    console.log('controller: handleGetAllProducts');
    try {
        const products = await getAllProducts();
        return res.json(products)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetProductsById = async (req, res) => {
    console.log('controller: handleGetProductsById rew.params: ', req.params);
    try {
        const product = await getProductsById(req.params);
        return res.json(product)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteProductsById = async (req, res) => {
    console.log('controller: handleDeleteProductsById req.params: ', req.params.id);
    try {
        const product = await deleteProductsById(req.params.id);
        return res.json(product)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateProductsById = async (req, res) => {
    console.log('controller: handleUpdateProductsById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const product = await getProductsByIdAndUpdate(req.params.id, req.body);
        return res.json(product)
    } catch (error) {
        return res.status(400).json(error);
    }
}


module.exports = {
    handleCreateProducts: handleCreateProducts, handleGetAllProducts, handleGetProductsById, handleDeleteProductsById, handleUpdateProductsById
}