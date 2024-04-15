import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductFilter = ({ products }) => {
    const location = useLocation();
    const history = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialSelectedCategories = queryParams.getAll('category');

    const [selectedCategories, setSelectedCategories] = useState(initialSelectedCategories);

    useEffect(() => {
        // Update URL when selected categories change
        const params = new URLSearchParams();
        selectedCategories.forEach(category => params.append('category', category));
        history('?'+params.toString());
}, [selectedCategories, history]);

    // Function to handle category selection
    const handleCategorySelect = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Filter products based on selected categories
    const filteredProducts = products.filter(product => {
        return selectedCategories.length === 0 || selectedCategories.includes(product.category);
    });
    // JSX for rendering category filters and filtered products
    return (
        <div>
            <h2>Filter by Category:</h2>
            <label>
                <input
                    type="checkbox"
                    checked={selectedCategories.includes('category1')}
                    onChange={() => handleCategorySelect('category1')}
                />
                Category 1
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={selectedCategories.includes('category2')}
                    onChange={() => handleCategorySelect('category2')}
                />
                {/* Add more categories as needed */}
            </label>

            {/* Display filtered products */}
            <h3>Filtered Products:</h3>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{product.name} - Category: {product.category}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFilter;
