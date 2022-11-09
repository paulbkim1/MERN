import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { createProduct, getAllProducts, deleteProduct } from '../services/internalApiServices';



export const AllProducts = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    })

    const [errors, setErrors] = useState(null);
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData)
            .then((data) => {
                console.log('new product data: ', data)
                navigate(`/products/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    const handleFormChanges = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleDelete = (idToDelete) => {
        deleteProduct(idToDelete)
        .then((data) => {
            console.log(data)
            const filteredProducts = products.filter((product) => {
                return product._id !== idToDelete
            })
            setProducts(filteredProducts)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch ((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className="w-50 p-4 rounded mx-auto shadow">
                <h3 className="text-center">Product Manager</h3>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <div className="form-group">
                        <label className='h6'>Title</label>
                        <input
                            onChange={handleFormChanges}
                            type="text"
                            name="title"
                            value={formData.title}
                            className='form-control'
                        />
                    </div>
                    <div className="form-group">
                        <label className='h6'>Price</label>
                        <input
                            onChange={handleFormChanges}
                            type="number"
                            name="price"
                            value={formData.price}
                            className='form-control'
                        />
                    </div>
                    <div className="form-group">
                        <label className='h6'>Description</label>
                        <input
                            onChange={handleFormChanges}
                            type="text"
                            name="description"
                            value={formData.description}
                            className='form-control'
                        />
                    </div>
                    <button className="btn btn-sm btn-outline-success">Create</button>
                </form>
            </div>

            <hr/>

            <div className="w-50 mx-auto text-center">
                <h2>All Products:</h2>
                {products.map((product, i) => {
                    const { _id, title, price, description} = product;
                    return (
                        <div key={i} className="shadow mb-4 rounded border p-4">
                            <Link to={`/products/${_id}`}>
                                <h4>{title}</h4>
                            </Link>
                            <button className="btn btn-sm btm-outline-danger mx-1"
                            onClick={(e) => {
                                handleDelete(_id)
                            }}>
                                Delete
                            </button>
                            <Link to={`/products/update/${_id}`}>Edit</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}