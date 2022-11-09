const express = require('express');

const {
    handleCreateProducts, handleGetAllProducts, handleGetProductsById, handleDeleteProductsById, handleUpdateProductsById
} = require('../controllers/products.controller')

const router = express.Router();


router.get('', handleGetAllProducts)
router.get('/:_id', handleGetProductsById)
router.post('/new', handleCreateProducts)
router.put('/update/:id', handleUpdateProductsById)
router.delete('/delete/:id', handleDeleteProductsById)


module.exports = {productsRouter: router}