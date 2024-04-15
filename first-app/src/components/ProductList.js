const ProductList = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Category: {product.category}</p>
                    {/* Add other product details */}
                </div>
            ))}
        </div>
    );
};
export default ProductList