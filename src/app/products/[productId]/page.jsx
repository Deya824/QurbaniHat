const ProductDetails = async ({params}) => {
    // Check your VS Code terminal (where your server is running) to see this output!
    console.log("Incoming params:", await params); 
    
    const { productId } = await params;
    const res=await fetch(`http://localhost:5000/products/${productId}`)
    const {name,price,description}=await res.json();
    return (
        <div>
            <h1>{name}</h1>
            <p>Price: ${price.toFixed(2)}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProductDetails;