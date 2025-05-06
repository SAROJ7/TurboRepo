import React from "react";
import createProduct from "./actions/create-product";

const CreateProduct = async () => {
  return (
    <div>
      <form action={createProduct}>
        <div className="">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" name="price" id="price" />
        </div>
        <button type="submit">CreateProduct</button>
      </form>
    </div>
  );
};

export default CreateProduct;
