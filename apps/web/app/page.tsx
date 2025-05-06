import CreateProduct from "./create-product/CreateProduct";
import Products from "./products/Products";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <CreateProduct />
      <Products />
    </div>
  );
}
