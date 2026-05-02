import Link from "next/link";

const Product = ({ product }) => {
  const { id, name, price, description } = product;
  return (
    <div>
      {/* Added text-base-content here just to be safe */}
      <div className="card w-96 bg-base-100 text-base-content card-lg shadow-sm border border-base-200">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="justify-end card-actions">
            <Link href={`/products/${id}`} className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;