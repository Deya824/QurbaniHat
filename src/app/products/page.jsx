import Product from "../../components/Product";

const getProducts=async()=>{
    const res=await fetch("http://localhost:5000/products",{cache:"force-cache"});
    return res.json();
}
const ProductPage = async () => {
    const products = await getProducts();
    return (
        <div>
        <div className="grid grid-cols-3 gap-4">
            {products.map(product=><Product key={product.id} product={product} />)}
            </div> 
        </div>
    );
};

export default ProductPage;