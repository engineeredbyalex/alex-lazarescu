import React, { useEffect, useState } from 'react';

function Shop_Component() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Replace 'YOUR_API_KEY' with your Gumroad API key
        fetch('https://api.gumroad.com/v2/products?access_token=YOUR_API_KEY')
            .then((response) => response.json())
            .then((data) => {
                // Process the data as needed
                setProducts(data.products);
            })
            .catch((error) => {
                console.error('Error fetching Gumroad data:', error);
            });
    }, []);

    return (
        <div className="shop">
            <h2>Shop</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price / 100}</p>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                            Buy Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop_Component;