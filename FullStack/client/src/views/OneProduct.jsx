import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getProductById } from '../services/internalApiServices';

export const OneProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    if (product === null) {
        return null;
    }

    const {title, price, description} = product

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </div>
    )
}