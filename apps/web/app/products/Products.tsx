import { IProduct } from "@repo/types";

const Products = async () => {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ["products"] },
  });

  const products: IProduct[] = await response.json();
  return (
    <div>
      <h1>Products -{">"}</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
