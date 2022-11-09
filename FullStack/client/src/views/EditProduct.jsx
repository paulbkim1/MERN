import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateProduct, getProductById } from '../services/internalApiServices';


export const EditProduct = (props) => {
    const [formData, setFormData] = useState({})

    const [errors, setErrors] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, formData)
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

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">Edit Product</h3>
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
    )
}